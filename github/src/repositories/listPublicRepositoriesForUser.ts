import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "listPublicRepositoriesForUser",
  title: "List Public Repositories For User",
  apps: ["github"],
  variables: [
    {
      name: "username",
      description: "The handle for the GitHub user account.",
    },
  ],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.listRepositoriesForUser({
      username: variables.username!,
    });
    console.log("Response data: ", response.data);
  },
});
