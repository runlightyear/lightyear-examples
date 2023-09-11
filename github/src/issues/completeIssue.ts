import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "completeIssue",
  title: "Complete Issue",
  apps: ["github"],
  variables: ["owner", "repo", "issueNumber"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const response = await github.updateIssue({
      owner: variables.owner!,
      repo: variables.repo!,
      issueNumber: parseInt(variables.issueNumber!),
      state: "closed",
      stateReason: "completed",
    });
    console.log("Response: ", response.data);
  },
});
