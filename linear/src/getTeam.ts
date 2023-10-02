import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "getTeam",
  title: "Get Team",
  apps: ["linear"],
  variables: ["teamId"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.getTeam({
      id: variables.teamId!,
    });

    console.log("Response: ", response.data);
  },
});
