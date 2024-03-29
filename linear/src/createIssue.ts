import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "createIssue",
  title: "Create Issue",
  apps: ["linear"],
  variables: ["teamId", "title"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.createIssue({
      teamId: variables.teamId!,
      title: variables.title!,
    });

    console.log("Response: ", response.data);
  },
});
