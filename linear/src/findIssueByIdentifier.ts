import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "findIssueByIdentifier",
  title: "Find Issue By Identifier",
  apps: ["linear"],
  variables: ["identifier"], // for example: ABC-123
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.findIssueByIdentifier({
      identifier: variables.identifier!,
    });

    console.log("Response: ", response);
  },
});
