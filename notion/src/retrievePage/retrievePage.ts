import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "retrievePage",
  title: "Retrieve Page",
  apps: ["notion"],
  variables: ["pageId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({ auth: auths.notion });
    const response = await notion.retrievePage({
      pageId: variables.pageId!,
    });
    console.log("Page:", response.data);
  },
});
