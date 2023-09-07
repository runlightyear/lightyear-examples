import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";
import { BASE_ID, TABLE_ID_OR_NAME } from "./constants";

const RECORD_ID = "recordId";

defineAction({
  name: "deleteRecord",
  title: "Delete Record",
  apps: ["airtable"],
  run: async ({ auths }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const result = await airtable.deleteRecord({
      baseId: BASE_ID,
      tableIdOrName: TABLE_ID_OR_NAME,
      recordId: RECORD_ID,
    });
    if (result.data.deleted) {
      console.log("Deleted record", result.data.id);
    }
  },
});
