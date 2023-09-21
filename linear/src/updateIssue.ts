import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "updateIssue",
  title: "Update Issue",
  apps: ["linear"],
  variables: ["issueId", "title"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.updateIssue({
      id: variables.issueId!,
      title: variables.title!,
    });

    console.log("Response: ", response.data);
  },
});
