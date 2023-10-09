import { defineAction } from "@runlightyear/lightyear";
import { GitHub } from "@runlightyear/github";

defineAction({
  name: "assignIssue",
  title: "Assign Issue",
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
    "assignee",
  ],
  run: async ({ auths, variables }) => {
    const github = new GitHub({
      auth: auths.github,
    });
    const result = await github.updateIssue({
      owner: variables.owner!,
      repo: variables.repo!,
      issueNumber: parseInt(variables.issueNumber!),
      assignees: [variables.assignee!],
    });
    console.log("Issue data: ", result.data);
  },
});
