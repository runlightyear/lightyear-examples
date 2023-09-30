import { Airtable } from "../../../lightyear/packages/@runlightyear/airtable";

Airtable.onNewOrUpdatedRecords({
  name: "onNewOrUpdatedRecords",
  title: "On New or Updated Records",
  baseId: "app7ZYewKy9OJeE2l",
  run: async ({ data, auths }) => {
    console.log("New or updated records: ", data.newOrUpdatedRecords);

    const airtable = new Airtable({ auth: auths.airtable });

    for (const newOrUpdatedRecord of data.newOrUpdatedRecords) {
      const response = await airtable.getRecord({
        baseId: "app7ZYewKy9OJeE2l",
        tableIdOrName: newOrUpdatedRecord.tableId,
        recordId: newOrUpdatedRecord.recordId,
      });

      console.log("Record data: ", response.data);
    }
  },
});
