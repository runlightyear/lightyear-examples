import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "createGist",
  title: "Create Gist",
  apps: ["github"],
  run: async ({ auths }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.createGist({
      description: "Hello World",
      files: {
        "helloWorld.txt": {
          content: "Hello World",
        },
      },
      isPublic: false,
    });
    console.log("Response data:", response.data);
  },
});
