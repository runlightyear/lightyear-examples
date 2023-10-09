import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "downloadFile",
  title: "Download File",
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
    "url",
  ],
  run: async ({ auths, variables }) => {
    const github = new GitHub({ auth: auths.github });

    const response = await github.get({ url: variables.url! });

    console.log("Response data: ", response.data);

    const content = response.data.content;
    const encoding = response.data.encoding;
    const decodedContent = Buffer.from(content, encoding).toString("utf8");

    console.log("Decoded content: ", decodedContent);
  },
});
