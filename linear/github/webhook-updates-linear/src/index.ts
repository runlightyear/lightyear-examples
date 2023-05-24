import { defineAction, defineWebhook } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";
import { Linear } from "@runlightyear/linear";
import { getNewlyDeployedCommits } from "./getNewlyDeployedCommits";
import { getLinearIdentifiersFromCommits } from "./getLinearIdentifiersFromCommits";
import { getAndCacheLinearStateId } from "./getAndCacheLinearStateId";
import { updateLinearIssueState } from "./updateLinearIssueState";
import { updateLastSuccessfulCommitId } from "./updateLastSuccessfulCommitId";

const OWNER = "<owner>";
const REPO = "<repo>";
const IDENTIFIER_REGEX = /ENG-[0-9]+/g; // <-- must be a global regex (ends with /g)
const STATE_NAME = "Done";

const successfulBuildWebhook = defineWebhook({
  name: "successful-build",
  title: "Successful Build",
});

defineAction({
  name: "webhook-updates-linear",
  title: "Webhook Updates Linear",
  trigger: {
    webhook: successfulBuildWebhook,
  },
  apps: ["github", "linear"],
  variables: ["lastSuccessfulCommitId?", "stateId?"],
  run: async ({ data, auths, variables }) => {
    const github = new GitHub({ auth: auths.github });
    const linear = new Linear({ auth: auths.linear });

    console.log("data", JSON.stringify(data, null, 2));

    const headCommitId = data?.params?.commitId;
    if (!headCommitId) {
      throw new Error("Missing commitId");
    }
    console.log("commitId", headCommitId);

    const commits = await getNewlyDeployedCommits({
      github,
      owner: OWNER,
      repo: REPO,
      lastSuccessfulCommitId: variables.lastSuccessfulCommitId,
      headCommitId,
    });
    console.log("commits", commits);

    const identifiers = getLinearIdentifiersFromCommits({
      commits,
      regex: IDENTIFIER_REGEX,
    });
    console.log("identifiers", identifiers);

    const stateId = await getAndCacheLinearStateId({
      variables,
      linear,
      stateName: STATE_NAME,
    });
    console.log("stateId", stateId);

    for (const identifier of identifiers) {
      console.log("updating linear issue", identifier);
      await updateLinearIssueState({ linear, identifier, stateId });
    }

    await updateLastSuccessfulCommitId({ payload: data });
  },
});
