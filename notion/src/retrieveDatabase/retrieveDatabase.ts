import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "retrieveDatabase",
  title: "Retrieve Database",
  apps: ["notion"],
  variables: ["databaseId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({
      auth: auths.notion,
    });
    const response = await notion.retrieveDatabase({
      databaseId: variables.databaseId!,
    });
    console.log("Result: ", response.data);
  },
});
