import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "createMultipleRecords",
  title: "Create Multiple Records",
  apps: ["airtable"],
  variables: ["baseId", "tableIdOrName"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });

    const response = await airtable.createRecords({
      baseId: variables.baseId!,
      tableIdOrName: variables.tableIdOrName!,
      records: [
        {
          fields: {
            Name: "Union Square",
          },
        },
        {
          fields: {
            Name: "Ferry Building",
          },
        },
      ],
    });

    console.log("Response: ", response.data);
  },
});
