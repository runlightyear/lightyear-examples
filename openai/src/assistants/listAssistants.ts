import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "listAssistants",
  title: "List Assistants",
  apps: ["openai"],
  run: async ({ auths }) => {
    const openai = new OpenAI({ auth: auths.openai });

    const response = await openai.listAssistants();

    console.log("Response data:", response.data);
  },
});
