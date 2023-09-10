import { Notion } from "@runlightyear/notion";

Notion.onUpdatedDatabaseItems({
  name: "onUpdatedDatabaseItems",
  title: "On Updated Database Items",
  pollingFrequency: 1,
  run: async ({ data }) => {
    console.log("Updated database items:", data);
  },
});
