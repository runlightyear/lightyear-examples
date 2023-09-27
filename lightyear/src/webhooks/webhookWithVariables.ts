import { defineWebhook } from "@runlightyear/lightyear";

defineWebhook({
  name: "webhookWithVariables",
  title: "Webhook with Variables",
  variables: [
    "var1",
    "var2?",
    {
      name: "var3",
      description: "Required variable 3",
    },
    {
      name: "var4?",
      description: "Optional variable 4",
    },
  ],
});
