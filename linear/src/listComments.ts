import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "listComments",
  title: "List Comments",
  apps: ["linear"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.listComments();

    console.log("Response: ", response.data);
  },
});
