import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "closePullRequest",
  title: "Close Pull Request",
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
        "The name of the repository without the .git extension. The name is not case sensitive.",
    },
    "pullNumber",
  ],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.updatePullRequest({
      owner: variables.owner!,
      repo: variables.repo!,
      pullNumber: parseInt(variables.pullNumber!),
      state: "closed",
    });
    console.log("Closed pull request: ", response.data);
  },
});
