import { defineWebhook } from "@runlightyear/lightyear";

defineWebhook({
  name: "webhookWithSecrets",
  title: "Webhook with Secrets",
  secrets: [
    "secret1",
    "secret2?",
    {
      name: "secret3",
      description: "Required secret 3",
    },
    {
      name: "secret4?",
      description: "Optional secret 4",
    },
  ],
});
