import { defineAction } from "@runlightyear/lightyear";
import { BASE_ID, TABLE_ID_OR_NAME } from "./constants";
import { Airtable } from "@runlightyear/airtable";

const RECORD_ID = "recordId";

defineAction({
  name: "updateRecord",
  title: "Update Record",
  apps: ["airtable"],
  run: async ({ auths }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const result = await airtable.updateRecord({
      baseId: BASE_ID,
      tableIdOrName: TABLE_ID_OR_NAME,
      recordId: RECORD_ID,
      fields: {
        Name: "North Beach",
      },
    });
    console.log("New record: ", result.data);
  },
});
