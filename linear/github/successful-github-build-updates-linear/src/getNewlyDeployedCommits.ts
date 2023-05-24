import { GitHub, WorkflowRunPayload } from "@runlightyear/github";

export async function getNewlyDeployedCommits(props: {
  owner: string;
  repo: string;
  lastSuccessfulCommitId: string | null;
  github: GitHub;
  data: WorkflowRunPayload;
}) {
  const { owner, repo, data, github, lastSuccessfulCommitId } = props;

  const headCommitId = data.workflowRun.headCommit.id;

  const githubResponse = await github.compareTwoCommits({
    owner,
    repo,
    basehead: `${lastSuccessfulCommitId || headCommitId}...${headCommitId}`,
  });

  return githubResponse.data.commits;
}
