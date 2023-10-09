import { GoogleSheets } from "@runlightyear/gsheets";

GoogleSheets.onNewRows({
  name: "onNewRows",
  title: "On New Rows",
  apps: ["gsheets"],
  pollingFrequency: 1,
  run: async ({ data }) => {
    console.log("Data: ", data);
  },
});
