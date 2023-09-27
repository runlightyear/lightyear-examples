import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "getIssue",
  title: "Get Issue",
  apps: ["linear"],
  variables: ["issueId"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.getIssue({
      id: variables.issueId!,
    });

    console.log("Response: ", response.data);
  },
});
