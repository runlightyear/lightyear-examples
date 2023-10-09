import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "labelIssue",
  title: "Label Issue",
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
    "issueNumber",
    "label",
  ],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.updateIssue({
      owner: variables.owner!,
      repo: variables.repo!,
      issueNumber: parseInt(variables.issueNumber!),
      labels: [variables.label!],
    });
    console.log("Response data: ", response.data);
  },
});
