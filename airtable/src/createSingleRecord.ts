import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";
import { BASE_ID, TABLE_ID_OR_NAME } from "./constants";

defineAction({
  name: "createSingleRecord",
  title: "Create Single Record",
  apps: ["airtable"],
  run: async ({ auths }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const result = await airtable.createRecords({
      baseId: BASE_ID,
      tableIdOrName: TABLE_ID_OR_NAME,
      fields: {
        Name: "North Beach",
      },
    });

    if ("id" in result.data) {
      console.log("Created record", result.data.id);
    }
  },
});
