import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "listIssues",
  title: "List Issues",
  apps: ["linear"],
  run: async ({ auths }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.listIssues();

    console.log("Response: ", response.data);
  },
});
