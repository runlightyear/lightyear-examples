import { Airtable } from "@runlightyear/airtable";

Airtable.onNewOrUpdatedRecords({
  name: "onNewOrUpdatedRecords",
  title: "On New or Updated Records",
  run: async ({ data, auths }) => {
    console.log("New or updated records: ", data.newOrUpdatedRecords);

    const airtable = new Airtable({ auth: auths.airtable });

    for (const newOrUpdatedRecord of data.newOrUpdatedRecords) {
      const response = await airtable.getRecord({
        baseId: data.baseId,
        tableIdOrName: newOrUpdatedRecord.tableId,
        recordId: newOrUpdatedRecord.recordId,
      });

      console.log("Record data: ", response.data);
    }
  },
});
