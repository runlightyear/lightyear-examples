import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";
import { BASE_ID, TABLE_ID_OR_NAME } from "./constants";

defineAction({
  name: "createMultipleRecords",
  title: "Create Multiple Records",
  apps: ["airtable"],
  run: async ({ auths }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const result = await airtable.createRecords({
      baseId: BASE_ID,
      tableIdOrName: TABLE_ID_OR_NAME,
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

    if ("records" in result.data) {
      console.log(
        "Created records",
        result.data.records.map((record) => record.id)
      );
    }
  },
});
