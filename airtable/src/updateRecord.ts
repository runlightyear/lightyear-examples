import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "updateRecord",
  title: "Update Record",
  apps: ["airtable"],
  variables: ["baseId", "tableIdOrName", "recordId", "name"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });

    const response = await airtable.updateRecord({
      baseId: variables.baseId!,
      tableIdOrName: variables.tableIdOrName!,
      recordId: variables.recordId!,
      fields: {
        Name: variables.name!,
      },
    });

    console.log("Response: ", response.data);
  },
});
