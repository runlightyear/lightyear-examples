import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

defineAction({
  name: "updateRowsAndColumns",
  title: "Update Rows and Columns",
  apps: ["gsheets"],
  variables: ["spreadsheetId"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });

    const response = await gsheets.updateValues({
      spreadsheetId: variables.spreadsheetId!,
      range: "A1:C3",
      valueInputOption: "RAW",
      valueRange: {
        range: "A1:C3",
        majorDimension: "ROWS",
        values: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      },
    });

    console.log("Response: ", response.data);
  },
});
