import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "getRecord",
  title: "Get Record",
  apps: ["airtable"],
  variables: ["baseId", "tableIdOrName", "recordId"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });

    const response = await airtable.getRecord({
      baseId: variables.baseId!,
      tableIdOrName: variables.tableIdOrName!,
      recordId: variables.recordId!,
    });

    console.log("Response: ", response.data);
  },
});
