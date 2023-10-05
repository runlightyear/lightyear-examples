import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "listWebhooks",
  title: "List Webhooks",
  apps: ["airtable"],
  variables: ["baseId"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const response = await airtable.listWebhooks({ baseId: variables.baseId! });
    console.log("response", response);
  },
});
