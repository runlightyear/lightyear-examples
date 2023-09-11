import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "createIssueComment",
  title: "Create Issue Comment",
  apps: ["github"],
  variables: ["owner", "repo", "issueNumber", "comment"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.createIssueComment({
      owner: variables.owner!,
      repo: variables.repo!,
      issueNumber: parseInt(variables.issueNumber!),
      body: variables.comment!,
    });
    console.log("Response: ", response.data);
  },
});
