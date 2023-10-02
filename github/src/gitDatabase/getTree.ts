import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "getTree",
  title: "Get Tree",
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
    {
      name: "treeSha",
      description: "The SHA1 value or ref (branch or tag) name of the tree.",
    },
  ],
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

    console.log("Response data: ", response.data);
  },
});
