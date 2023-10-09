import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

defineAction({
  name: "updateColumn",
  title: "Update Column",
  apps: ["gsheets"],
  variables: ["spreadsheetId"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });

    const response = await gsheets.updateValues({
      spreadsheetId: variables.spreadsheetId!,
      range: "A:A",
      valueInputOption: "RAW",
      valueRange: {
        range: "A:A",
        majorDimension: "COLUMNS",
        values: [[randomNumber(), randomNumber(), randomNumber()]],
      },
    });

    console.log("Response: ", response.data);
  },
});
