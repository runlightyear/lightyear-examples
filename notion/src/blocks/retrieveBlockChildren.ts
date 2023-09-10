import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "retrieveBlockChildren",
  title: "Retrieve Block Children",
  apps: ["notion"],
  variables: ["blockId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({
      auth: auths.notion,
    });
    const response = await notion.retrieveBlockChildren({
      blockId: variables.blockId!,
    });
    console.log("Block children:", response.data);
  },
});
