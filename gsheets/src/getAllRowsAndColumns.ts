import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

defineAction({
  name: "getAllRowsAndColumns",
  title: "Get All Rows And Columns",
  apps: ["gsheets"],
  variables: ["spreadsheetId", "worksheetName"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });

    const response = await gsheets.getValues({
      spreadsheetId: variables.spreadsheetId!,
      range: `${variables.worksheetName!}`,
    });

    console.log("Response: ", response.data);
  },
});
