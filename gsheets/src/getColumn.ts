import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

defineAction({
  name: "getColumn",
  title: "Get Column",
  apps: ["gsheets"],
  variables: ["spreadsheetId"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });

    const response = await gsheets.getValues({
      spreadsheetId: variables.spreadsheetId!,
      range: "A:A",
      majorDimension: "COLUMNS",
    });

    console.log("Response: ", response.data);
  },
});
