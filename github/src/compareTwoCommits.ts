import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "compareTwoCommits",
  title: "Compare Two Commits",
  apps: ["github"],
  variables: ["owner", "repo", "basehead"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.compareTwoCommits({
      owner: variables.owner!,
      repo: variables.repo!,
      basehead: variables.basehead!,
    });
    console.log("Response: ", response.data);
  },
});
