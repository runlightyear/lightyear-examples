import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

defineAction({
  name: "getRow",
  title: "Get Row",
  apps: ["gsheets"],
  variables: ["spreadsheetId"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });

    const response = await gsheets.getValues({
      spreadsheetId: variables.spreadsheetId!,
      range: "1:1",
    });

    console.log("Response: ", response.data);
  },
});
