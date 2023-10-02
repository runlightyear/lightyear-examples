import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "compareTwoCommits",
  title: "Compare Two Commits",
  apps: ["github"],
  variables: [
    {
      name: "owner",
      description:
        "The account owner of the repository. The name is not case sensitive.",
    },
    {
      name: "repo",
      description:
        "The name of the repository. The name is not case sensitive.",
    },
    {
      name: "basehead",
      description:
        "The base branch and head branch to compare. This parameter expects the format BASE...HEAD. Both must be branch names in repo. To compare with a branch that exists in a different repository in the same network as repo, the basehead parameter expects the format USERNAME:BASE...USERNAME:HEAD.",
    },
  ],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.compareTwoCommits({
      owner: variables.owner!,
      repo: variables.repo!,
      basehead: variables.basehead!,
    });
    console.log("Response data:", response.data);
  },
});
