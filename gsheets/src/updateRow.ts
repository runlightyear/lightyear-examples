import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

defineAction({
  name: "updateRow",
  title: "Update Row",
  apps: ["gsheets"],
  variables: ["spreadsheetId"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });

    const response = await gsheets.updateValues({
      spreadsheetId: variables.spreadsheetId!,
      range: "1:1",
      valueInputOption: "RAW",
      valueRange: {
        range: "1:1",
        majorDimension: "ROWS",
        values: [[randomNumber(), randomNumber(), randomNumber()]],
      },
    });

    console.log("Response: ", response.data);
  },
});
