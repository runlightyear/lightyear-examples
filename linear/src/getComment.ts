import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "getComment",
  title: "Get Comment",
  apps: ["linear"],
  variables: ["commentId"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.getComment({
      id: variables.commentId!,
    });

    console.log("Response: ", response.data);
  },
});
