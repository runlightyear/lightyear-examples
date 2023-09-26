import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "getTree",
  title: "Get Tree",
  apps: ["github"],
  variables: ["owner", "repo", "treeSha"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });

    const response = await github.getTree({
      owner: variables.owner!,
      repo: variables.repo!,
      treeSha: variables.treeSha!,
      recursive: true,
    });

    console.log("Response: ", response.data);
  },
});
