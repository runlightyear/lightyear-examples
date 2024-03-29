import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "listRepositoriesForCurrentUser",
  title: "List Repositories For Current User",
  apps: ["github"],
  run: async ({ auths }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.listRepositoriesForAuthenticatedUser();
    console.log("Response data: ", response.data);
  },
});
