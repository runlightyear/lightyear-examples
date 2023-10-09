import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "getBaseSchema",
  title: "Get Base Schema",
  apps: ["airtable"],
  variables: ["baseId"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const response = await airtable.getBaseSchema({
      baseId: variables.baseId!,
    });
    console.log("Response data", response.data);
  },
});
