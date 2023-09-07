import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";
import { BASE_ID, TABLE_ID_OR_NAME } from "./constants";

defineAction({
  name: "listRecords",
  title: "List Records",
  apps: ["airtable"],
  run: async ({ auths }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const result = await airtable.listRecords({
      baseId: BASE_ID,
      tableIdOrName: TABLE_ID_OR_NAME,
    });
    const records = result.data.records;
    console.log(
      "Names: ",
      records.map((record) => record.fields["Name"])
    );
  },
});
