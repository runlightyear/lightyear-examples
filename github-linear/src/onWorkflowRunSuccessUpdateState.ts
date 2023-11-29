import { setVariable, SKIPPED } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";
import { Linear } from "@runlightyear/linear";

const GITHUB_OWNER = "owner"; // <-- replace with your GitHub repo owner
const GITHUB_REPO = "repo"; // <-- replace with your GitHub repo name
const GITHUB_BRANCH = "main"; // <-- replace with the branch you want to watch
const LINEAR_PREFIX = "LY"; // <-- replace with your Linear prefix
const LINEAR_STATE_NAME = "In Production"; // <-- replace with your Linear state name

GitHub.onWorkflowRun({
  name: "onWorkflowRunSuccessUpdateState",
  title: "On Workflow Run Success Update State",
  owner: GITHUB_OWNER,
  repo: GITHUB_REPO,
  apps: ["linear"],
  variables: ["lastSuccessfulCommitId?"],
  run: async ({ data, auths, variables }) => {
    const github = new GitHub({ auth: auths.github });
    const linear = new Linear({ auth: auths.linear });

    const { workflowRun } = data;

    if (workflowRun.headBranch !== GITHUB_BRANCH) {
      console.log(`Workflow not run on ${GITHUB_BRANCH} branch, skipping...`);
      throw SKIPPED;
    }

    if (workflowRun.conclusion !== "success") {
      console.log("Workflow run not a success, skipping...");
      throw SKIPPED;
    }

    // Get the latest commits from this workflow run
    const headCommitId = workflowRun.headCommit.id;
    const {
      data: { commits },
    } = await github.compareTwoCommits({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      basehead: `${
        variables.lastSuccessfulCommitId ?? headCommitId
      }...${headCommitId}`,
    });

    // Find all Linear issue identifiers in the commits
    const linearIdentifiers = GitHub.matchAllCommits({
      regex: new RegExp(`${LINEAR_PREFIX}-[0-9]+`, "g"),
      commits,
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
      const issue = await linear.findIssueByIdentifier({ identifier });
      if (!issue) {
        console.error(`Unknown Linear issue: ${identifier}`);
        continue;
      }

      await linear.updateIssue({
        id: issue.id,
        stateId: workflowState.id,
      });
    }

    await setVariable("lastSuccessfulCommitId", headCommitId);
  },
});
