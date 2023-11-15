import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "createAssistant",
  title: "Create Assistant",
  apps: ["openai"],
  run: async ({ auths }) => {
    const openai = new OpenAI({ auth: auths.openai });

    const response = await openai.createAssistant({
      model: "gpt-4-1106-preview",
      name: "Math Tutor",
      instructions:
        "You are a personal math tutor. Write and run code to answer math questions.",
      tools: [{ type: "code_interpreter" }],
    });

    console.log("Response data:", response.data);
  },
});
