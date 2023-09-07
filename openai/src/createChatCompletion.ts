import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "createChatCompletion",
  title: "Create Chat Completion",
  apps: ["openai"],
  run: async ({ auths }) => {
    const openai = new OpenAI({
      auth: auths.openai,
    });
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "Hello!",
        },
      ],
    });
    const choice = result.data.choices[0];
    const completion = choice.message.content;
    console.log("Completion: ", completion);
  },
});
