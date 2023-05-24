import { GitHub, PushCommit } from "@runlightyear/github";

export interface GetLinearIdentifiersFromCommitsProps {
  regex: RegExp;
  commits: Array<PushCommit>;
}

export function getLinearIdentifiersFromCommits(
  props: GetLinearIdentifiersFromCommitsProps
) {
  const { regex, commits } = props;

  return GitHub.matchAllCommits({
    regex,
    commits,
  });
}
