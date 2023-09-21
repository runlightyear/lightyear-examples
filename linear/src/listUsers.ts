import { defineAction } from "../../../lightyear/packages/@runlightyear/lightyear";
import { Linear } from "../../../lightyear/packages/@runlightyear/linear";

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
