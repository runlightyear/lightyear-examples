import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "listRecords",
  title: "List Records",
  apps: ["airtable"],
  variables: ["baseId", "tableIdOrName"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });

    const response = await airtable.listRecords({
      baseId: variables.baseId!,
      tableIdOrName: variables.tableIdOrName!,
      recordMetadata: ["commentCount"],
    });

    console.log("Response: ", response.data);
  },
});
