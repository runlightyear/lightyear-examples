import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "createPage",
  title: "Create Page",
  apps: ["notion"],
  variables: ["existingPageId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({ auth: auths.notion });

    const response = await notion.createPage({
      parent: {
        pageId: variables.existingPageId!,
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: "Hello World",
              },
            },
          ],
        },
      },
    });
    console.log("Created page", response.data);
  },
});
