import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "createIssue",
  title: "Create Issue",
  apps: ["github"],
  variables: ["owner", "repo", "title"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.createIssue({
      owner: variables.owner!,
      repo: variables.repo!,
      title: variables.title!,
    });
    console.log("Response: ", response.data);
  },
});
