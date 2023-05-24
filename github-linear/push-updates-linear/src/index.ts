import { GitHub } from "@runlightyear/github";
import { Linear } from "@runlightyear/linear";
import { getLinearIdentifiersFromCommits } from "./getLinearIdentifiersFromCommits";
import { getAndCacheLinearStateId } from "./getAndCacheLinearStateId";
import { updateLinearIssueState } from "./updateLinearIssueState";

const OWNER = "<owner>";
const REPO = "<repo>";
const IDENTIFIER_REGEX = /ENG-[0-9]+/g; // <-- must be a global regex (ends with /g)
const STATE_NAME = "Done";

GitHub.onPush({
  name: "push-updates-linear",
  title: "Push Updates Linear",
  apps: ["linear"],
  owner: OWNER,
  repo: REPO,
  variables: ["stateId?"],
  run: async ({ data, auths, variables }) => {
    const github = new GitHub({ auth: auths.github });
    const linear = new Linear({ auth: auths.linear });

    const identifiers = getLinearIdentifiersFromCommits({
      commits: data.commits,
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
  },
});
