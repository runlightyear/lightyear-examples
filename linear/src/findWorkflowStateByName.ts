import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

defineAction({
  name: "findWorkflowStateByName",
  title: "Find Workflow State By Name",
  apps: ["linear"],
  variables: ["teamKey", "name"],
  run: async ({ auths, variables }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.findWorkflowStateByName({
      teamKey: variables.teamKey!,
      name: variables.name!,
    });

    console.log("Response: ", response);
  },
});
