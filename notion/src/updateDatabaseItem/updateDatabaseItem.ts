import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "updateDatabaseItem",
  title: "Update Database Item",
  apps: ["notion"],
  variables: ["databaseItemId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({ auth: auths.notion });
    const response = await notion.updatePageProperties({
      pageId: variables.databaseItemId!,
      properties: {
        Name: {
          title: [
            {
              text: {
                content: "Updated name",
              },
            },
          ],
        },
      },
    });
    console.log("Updated database item:", response.data);
  },
});
