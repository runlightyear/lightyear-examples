import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

defineAction({
  name: "clearColumn",
  title: "Clear Column",
  apps: ["gsheets"],
  variables: ["spreadsheetId"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });

    const response = await gsheets.clearValues({
      spreadsheetId: variables.spreadsheetId!,
      range: "A:A",
    });

    console.log("Response: ", response.data);
  },
});
