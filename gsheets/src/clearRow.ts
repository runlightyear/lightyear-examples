import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

defineAction({
  name: "clearRow",
  title: "Clear Row",
  apps: ["gsheets"],
  variables: ["spreadsheetId"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });

    const response = await gsheets.clearValues({
      spreadsheetId: variables.spreadsheetId!,
      range: "1:1",
    });

    console.log("Response: ", response.data);
  },
});
