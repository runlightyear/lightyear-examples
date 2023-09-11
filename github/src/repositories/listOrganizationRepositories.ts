import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "listOrganizationRepositories",
  title: "List Organization Repositories",
  apps: ["github"],
  variables: ["org"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.listOrganizationRepositories({
      org: variables.org!,
    });
    console.log("Response: ", response.data);
  },
});
