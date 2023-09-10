import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "queryDatabaseWithFilter",
  title: "Query Database With Filter",
  apps: ["notion"],
  variables: ["databaseId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({
      auth: auths.notion,
    });
    const response = await notion.queryDatabase({
      databaseId: variables.databaseId!,
      filter: {
        property: "Name",
        richText: {
          isNotEmpty: true,
        },
      },
    });
    console.log("Result: ", response.data);
  },
});
