import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "closePullRequest",
  title: "Close Pull Request",
  apps: ["github"],
  variables: ["owner", "repo", "pull_number"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.updatePullRequest({
      owner: variables.owner!,
      repo: variables.repo!,
      pullNumber: parseInt(variables.pull_number!),
      state: "closed",
    });
    console.log("Closed pull request: ", response.data);
  },
});
