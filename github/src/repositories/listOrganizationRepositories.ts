import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "listOrganizationRepositories",
  title: "List Organization Repositories",
  apps: ["github"],
  variables: [
    {
      name: "org",
      description: "The organization name. The name is not case sensitive.",
    },
  ],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.listOrganizationRepositories({
      org: variables.org!,
    });
    console.log("Response data: ", response.data);
  },
});
