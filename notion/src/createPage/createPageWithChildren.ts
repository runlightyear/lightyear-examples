import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "createPageWithChildren",
  title: "Create Page With Children",
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
                content: "Hello World, I have children!",
              },
            },
          ],
        },
      },
      children: [
        {
          heading2: {
            richText: [
              {
                text: {
                  content: "This is a heading",
                },
              },
            ],
          },
        },
        {
          paragraph: {
            richText: [
              {
                text: {
                  content: "This is a paragraph I just wrote",
                },
              },
            ],
          },
        },
      ],
    });
    console.log("Created page", response.data);
  },
});
