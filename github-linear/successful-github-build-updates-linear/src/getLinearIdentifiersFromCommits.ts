import { Commit, GitHub } from "@runlightyear/github";

export interface GetLinearIdentifiersFromCommitsProps {
  regex: RegExp;
  commits: Array<Commit>;
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
