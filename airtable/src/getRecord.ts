import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";
import { BASE_ID, TABLE_ID_OR_NAME } from "./constants";

const RECORD_ID = "recordId";

defineAction({
  name: "getRecord",
  title: "Get Record",
  apps: ["airtable"],
  run: async ({ auths }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const result = await airtable.getRecord({
      baseId: BASE_ID,
      tableIdOrName: TABLE_ID_OR_NAME,
      recordId: RECORD_ID,
    });
    console.log("Record: ", result.data);
  },
});
