import { GitHub } from "@runlightyear/github";
import { Linear } from "@runlightyear/linear";
import { SKIPPED } from "@runlightyear/lightyear";

const GITHUB_OWNER = "owner"; // <-- replace with your GitHub repo owner
const GITHUB_REPO = "repo"; // <-- replace with your GitHub repo name
const GITHUB_BRANCHES_TO_SKIP = ["main"]; // <-- replace with the branches you want to skip
const LINEAR_PREFIX = "LY"; // <-- replace with your Linear prefix
const LINEAR_STATE_NAME = "Pushed"; // <-- replace with your Linear state name

GitHub.onPush({
  name: "onPushUpdateState",
  title: "On Push Update State",
  owner: GITHUB_OWNER,
  repo: GITHUB_REPO,
  apps: ["linear"],
  run: async ({ data: push, auths }) => {
    const linear = new Linear({ auth: auths.linear });

    for (const branch in GITHUB_BRANCHES_TO_SKIP) {
      if (push.ref === `refs/heads/${branch}`) {
        console.log(`Push on ${push.ref} branch, skipping...`);
        throw SKIPPED;
      }
    }

    // Find all Linear issue identifiers in the commits
    const linearIdentifiers = GitHub.matchAllCommits({
      regex: new RegExp(`${LINEAR_PREFIX}-[0-9]+`, "g"),
      commits: push.commits,
    });

    // Get the Linear workflow state
    const workflowState = await linear.findWorkflowStateByName({
      teamKey: LINEAR_PREFIX,
      name: LINEAR_STATE_NAME,
    });
    if (!workflowState) {
      throw Error(`Unknown workflow state: ${LINEAR_STATE_NAME}`);
    }

    // Update each of the Linear issues to the new state
    for (const identifier of linearIdentifiers) {
      console.log(
        `Updating Linear issue ${identifier} to ${LINEAR_STATE_NAME}`
      );
      const issue = await linear.findIssueByIdentifier({
        identifier,
      });
      if (!issue) {
        throw Error(`Unknown issue: ${identifier}`);
      }

      await linear.updateIssue({
        id: issue.id,
        stateId: workflowState.id,
      });
    }
  },
});
