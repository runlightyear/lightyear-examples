import { Airtable } from "../../../lightyear/packages/@runlightyear/airtable";

Airtable.onNewRecords({
  name: "onNewRecords",
  title: "On New Records",
  baseId: "app7ZYewKy9OJeE2l",
  run: async ({ data, auths }) => {
    console.log("New records: ", data.newRecords);

    const airtable = new Airtable({ auth: auths.airtable });

    for (const newRecord of data.newRecords) {
      const response = await airtable.getRecord({
        baseId: "app7ZYewKy9OJeE2l",
        tableIdOrName: newRecord.tableId,
        recordId: newRecord.recordId,
      });

      console.log("Record data: ", response.data);
    }
  },
});
