import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "listTeams",
  title: "List Teams",
  apps: ["linear"],
  run: async ({ auths }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.listTeams();

    console.log("Response: ", JSON.stringify(response.data, null, 2));
  },
});
