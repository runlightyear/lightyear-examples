import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "createPullRequest",
  title: "Create Pull Request",
  apps: ["github"],
  variables: ["owner", "repo", "title", "body", "base", "head"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.createPullRequest({
      owner: variables.owner!,
      repo: variables.repo!,
      title: variables.title!,
      body: variables.body!,
      base: variables.base!,
      head: variables.head!,
    });
    console.log("Response: ", response.data);
  },
});
