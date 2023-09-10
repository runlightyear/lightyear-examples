import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";

defineAction({
  name: "createDatabase",
  title: "Create Database",
  apps: ["notion"],
  variables: ["parentPageId"],
  run: async ({ auths, variables }) => {
    const notion = new Notion({
      auth: auths.notion,
    });
    const response = await notion.createDatabase({
      parent: {
        pageId: variables.parentPageId!,
      },
      title: [
        {
          text: {
            content: "Grocery List",
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
        "In Stock": {
          checkbox: {},
        },
        "Food Group": {
          select: {
            options: [
              {
                name: "🥦 Vegetable",
                color: "green",
              },
              {
                name: "🍎 Fruit",
                color: "red",
              },
              {
                name: "🍞 Carbs",
                color: "yellow",
              },
            ],
          },
        },
        Price: {
          number: {
            format: "dollar",
          },
        },
        "Last Ordered": {
          date: {},
        },
        "Store Availability": {
          multiSelect: {
            options: [
              {
                name: "Duc Loi Market",
                color: "blue",
              },
              {
                name: "Rainbow Grocery",
                color: "gray",
              },
              {
                name: "Nijiya Market",
                color: "purple",
              },
              {
                name: "Gus's Community Market",
                color: "yellow",
              },
            ],
          },
        },
        "+1": {
          people: {},
        },
        Photo: {
          files: {},
        },
      },
    });
    console.log("Database: ", response.data);
  },
});
