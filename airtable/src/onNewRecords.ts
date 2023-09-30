import { Airtable } from "@runlightyear/airtable";

Airtable.onNewRecords({
  name: "onNewRecords",
  title: "On New Records",
  run: async ({ data, auths }) => {
    const { baseId, newRecords } = data;

    console.log("New records: ", newRecords);

    const airtable = new Airtable({ auth: auths.airtable });

    for (const newRecord of data.newRecords) {
      const response = await airtable.getRecord({
        baseId,
        tableIdOrName: newRecord.tableId,
        recordId: newRecord.recordId,
      });

      console.log("Record data: ", response.data);
    }
  },
});
