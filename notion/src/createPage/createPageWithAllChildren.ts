import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "createPageWithAllChildren",
  title: "Create Page With All Children",
  apps: ["notion"],
  variables: ["existingPageId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({ auth: auths.notion });

    const result = await notion.createPage({
      parent: {
        pageId: variables.existingPageId!,
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: "Hello World, I have all the children!",
              },
            },
          ],
        },
      },
      children: [
        {
          bookmark: {
            url: "https://www.notion.so",
            caption: [],
          },
        },
        {
          breadcrumb: {},
        },
        {
          bulletedListItem: {
            richText: [
              {
                text: {
                  content: "Bullet 1",
                },
              },
            ],
          },
        },
        {
          bulletedListItem: {
            richText: [
              {
                text: {
                  content: "Bullet 2",
                },
              },
            ],
          },
        },
        {
          bulletedListItem: {
            richText: [
              {
                text: {
                  content: "Bullet 3",
                },
              },
            ],
          },
        },
        {
          divider: {},
        },
        {
          embed: {
            url: "https://www.runlightyear.com",
          },
        },
        {
          equation: {
            expression: "x^2",
          },
        },
        {
          heading1: {
            richText: [
              {
                text: {
                  content: "This is a heading 1",
                },
              },
            ],
          },
        },
        {
          heading2: {
            richText: [
              {
                text: {
                  content: "This is a heading 2",
                },
              },
            ],
          },
        },
        {
          heading3: {
            richText: [
              {
                text: {
                  content: "This is a heading 3",
                },
              },
            ],
          },
        },
        // { linkPreview: { url: "https://www.runlightyear.com" } },
        { numberedListItem: { richText: [{ text: { content: "Number 1" } }] } },
        { numberedListItem: { richText: [{ text: { content: "Number 2" } }] } },
        { numberedListItem: { richText: [{ text: { content: "Number 3" } }] } },
        { quote: { richText: [{ text: { content: "This is a quote" } }] } },
        {
          paragraph: {
            richText: [
              {
                text: {
                  content: "This is a paragraph I just wrote",
                  link: {
                    url: "https://www.google.com",
                  },
                },
              },
            ],
          },
        },
        {
          toDo: {
            richText: [
              {
                text: {
                  content: "Item 1",
                },
              },
            ],
          },
        },
        {
          toDo: {
            richText: [
              {
                text: {
                  content: "Item 2",
                },
              },
            ],
            checked: true,
          },
        },
        {
          toDo: {
            richText: [
              {
                text: {
                  content: "Item 3",
                },
              },
            ],
            checked: false,
          },
        },
        {
          toggle: {
            richText: [
              {
                text: {
                  content: "Turn me on or off",
                },
              },
            ],
            children: [
              {
                paragraph: {
                  richText: [
                    {
                      text: {
                        content: "This is a hidden paragraph",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    });
  },
});
