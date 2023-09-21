import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "listCommentsForIssue",
  title: "List Comments for Issue",
  apps: ["linear"],
  variables: ["issueId"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.listComments({
      filter: {
        issue: {
          id: { eq: variables.issueId! },
        },
      },
    });

    console.log("Response: ", response.data);
  },
});
