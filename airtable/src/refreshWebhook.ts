import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "refreshWebhook",
  title: "Refresh Webhook",
  apps: ["airtable"],
  variables: ["baseId", "webhookId"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const response = await airtable.refreshWebhook({
      baseId: variables.baseId!,
      webhookId: variables.webhookId!,
    });
    console.log("response", response);
  },
});
