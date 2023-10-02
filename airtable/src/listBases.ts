import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "listBases",
  title: "List Bases",
  apps: ["airtable"],
  run: async ({ auths }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });

    const response = await airtable.listBases();

    console.log("Response data", response.data);
  },
});
