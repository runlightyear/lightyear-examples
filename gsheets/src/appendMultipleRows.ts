import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

defineAction({
  name: "appendRows",
  title: "Append Multiple Rows",
  apps: ["gsheets"],
  variables: ["spreadsheetId"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });
    const response = await gsheets.appendValues({
      spreadsheetId: variables.spreadsheetId!,
      range: "1:1",
      valueInputOption: "RAW",
      valueRange: {
        range: "1:1",
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
