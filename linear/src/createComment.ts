import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "createComment",
  title: "Create Comment",
  apps: ["linear"],
  variables: ["issueId", "body"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.createComment({
      issueId: variables.issueId!,
      body: variables.body!,
    });

    console.log("Response: ", response.data);
  },
});
