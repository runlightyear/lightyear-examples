import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "createSingleRecord",
  title: "Create Single Record",
  apps: ["airtable"],
  variables: ["baseId", "tableIdOrName", "name"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });

    const response = await airtable.createRecords({
      baseId: variables.baseId!,
      tableIdOrName: variables.tableIdOrName!,
      fields: {
        Name: variables.name!,
      },
    });

    console.log("Record: ", response.data);
  },
});
