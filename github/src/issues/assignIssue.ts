import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "assignIssue",
  title: "Assign Issue",
  apps: ["github"],
  variables: ["owner", "repo", "issue_number", "assignee"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const result = await github.updateIssue({
      owner: variables.owner!,
      repo: variables.repo!,
      issueNumber: parseInt(variables.issue_number!),
      assignees: [variables.assignee!],
    });
    console.log("Issue: ", result.data);
  },
});
