import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "deleteAssistant",
  title: "Delete Assistant",
  apps: ["openai"],
  variables: ["assistantId"],
  run: async ({ auths, variables }) => {
    const openai = new OpenAI({ auth: auths.openai });

    const response = await openai.deleteAssistant({
      assistantId: variables.assistantId!,
    });

    console.log("Response data:", response.data);
  },
});
