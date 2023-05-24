import { GitHub, WorkflowRunPayload } from "@runlightyear/github";

export async function getNewlyDeployedCommits(props: {
  owner: string;
  repo: string;
  lastSuccessfulCommitId: string | null;
  github: GitHub;
  headCommitId: string;
}) {
  const { owner, repo, github, lastSuccessfulCommitId, headCommitId } = props;

  const githubResponse = await github.compareTwoCommits({
    owner,
    repo,
    basehead: `${lastSuccessfulCommitId || headCommitId}...${headCommitId}`,
  });

  return githubResponse.data.commits;
}
