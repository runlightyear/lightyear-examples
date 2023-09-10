import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "queryDatabase",
  title: "Query Database",
  apps: ["notion"],
  variables: ["databaseId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({
      auth: auths.notion,
    });
    const response = await notion.queryDatabase({
      databaseId: variables.databaseId!,
    });
    console.log("Query result: ", response.data);
  },
});
