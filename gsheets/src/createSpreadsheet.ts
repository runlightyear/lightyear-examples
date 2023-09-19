import { defineAction } from "@runlightyear/lightyear";
import { GoogleSheets } from "@runlightyear/gsheets";

defineAction({
  name: "createSpreadsheet",
  title: "Create Spreadsheet",
  apps: ["gsheets"],
  variables: ["title"],
  run: async ({ auths, variables }) => {
    const gsheets = new GoogleSheets({
      auth: auths.gsheets,
    });

    const response = await gsheets.createSpreadsheet({
      title: variables.title!,
    });

    console.log("Response: ", response.data);
  },
});
