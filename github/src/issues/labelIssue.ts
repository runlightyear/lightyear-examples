import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "labelIssue",
  title: "Label Issue",
  apps: ["github"],
  variables: ["owner", "repo", "issueNumber", "label"],
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
    console.log("Response: ", response.data);
  },
});
