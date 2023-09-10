import { Notion } from "@runlightyear/notion";

Notion.onNewDatabaseItems({
  name: "onNewDatabaseItems",
  title: "On New Database Items",
  pollingFrequency: 1,
  run: async ({ data }) => {
    console.log("New database items:", data);
  },
});
