import { GitHub } from "@runlightyear/github";
import { Linear } from "@runlightyear/linear";
import { deployWasSuccessful } from "./deployWasSuccessful";
import { getNewlyDeployedCommits } from "./getNewlyDeployedCommits";
import { getLinearIdentifiersFromCommits } from "./getLinearIdentifiersFromCommits";
import { getAndCacheLinearStateId } from "./getAndCacheLinearStateId";
import { updateLinearIssueState } from "./updateLinearIssueState";
import { updateLastSuccessfulCommitId } from "./updateLastSuccessfulCommitId";
import { SKIPPED } from "../../../../lightyear/packages/@runlightyear/lightyear";

const OWNER = "<owner>";
const REPO = "<repo";
const IDENTIFIER_REGEX = /ENG-[0-9]+/g; // <-- must be a global regex (ends with /g)
const STATE_NAME = "Done";

GitHub.onWorkflowRun({
  name: "successful-github-build-updates-linear",
  title: "Successful GitHub Build Updates Linear",
  owner: OWNER,
  repo: REPO,
  apps: ["linear"],
  variables: ["lastSuccessfulCommitId?", "stateId?"],
  run: async ({ data, auths, variables }) => {
    const github = new GitHub({ auth: auths.github });
    const linear = new Linear({ auth: auths.linear });

    if (deployWasSuccessful({ payload: data })) {
      const commits = await getNewlyDeployedCommits({
        owner: OWNER,
        repo: REPO,
        lastSuccessfulCommitId: variables.lastSuccessfulCommitId,
        github,
        data,
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
      console.log("updated last successful commit");
    } else {
      throw SKIPPED;
    }
  },
});
