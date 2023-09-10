import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "createDatabaseItems",
  title: "Create Database Items",
  apps: ["notion"],
  variables: ["parentPageId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({ auth: auths.notion });
    const response = await notion.createDatabase({
      parent: {
        pageId: variables.parentPageId!,
      },
      title: [
        {
          text: {
            content: "Shopping List",
          },
        },
      ],
      properties: {
        Name: {
          title: {},
        },
        Description: {
          richText: {},
        },
        Quantity: {
          number: {
            format: "number",
          },
        },
      },
    });

    const newDatabaseId = response.data.id;

    await notion.createPage({
      parent: {
        databaseId: newDatabaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: "🥦 Broccoli",
              },
            },
          ],
        },
        Description: {
          richText: [
            {
              text: {
                content: "A green vegetable",
              },
            },
          ],
        },
        Quantity: {
          number: 1,
        },
      },
    });

    await notion.createPage({
      parent: {
        databaseId: newDatabaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: "🍎 Apple",
              },
            },
          ],
        },
        Description: {
          richText: [
            {
              text: {
                content: "A red fruit",
              },
            },
          ],
        },
        Quantity: {
          number: 2,
        },
      },
    });

    await notion.createPage({
      parent: {
        databaseId: newDatabaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: "🍞 Bread",
              },
            },
          ],
        },
        Description: {
          richText: [
            {
              text: {
                content: "A yellow carb",
              },
            },
          ],
        },
        Quantity: {
          number: 3,
        },
      },
    });
  },
});
