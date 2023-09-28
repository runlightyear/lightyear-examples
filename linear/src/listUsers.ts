import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "listUsers",
  title: "List Users",
  apps: ["linear"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.listUsers();

    console.log("Response: ", response.data);
  },
});
