import { defineAction } from "../../../lightyear/packages/@runlightyear/lightyear";
import { Airtable } from "../../../lightyear/packages/@runlightyear/airtable";

defineAction({
  name: "deleteAllWebhooks",
  title: "Delete All Webhooks",
  apps: ["airtable"],
  variables: ["baseId"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({
      auth: auths.airtable,
    });
    const response = await airtable.listWebhooks({
      baseId: variables.baseId!,
    });
    for (const webhook of response.data.webhooks) {
      await airtable.deleteWebhook({
        baseId: variables.baseId!,
        webhookId: webhook.id,
      });
      console.log("deleted webhook", webhook.id);
    }
  },
});
