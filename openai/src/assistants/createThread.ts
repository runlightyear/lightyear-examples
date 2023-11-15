import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "createThread",
  title: "Create Thread",
  apps: ["openai"],
  variables: ["content"],
  run: async ({ auths, variables }) => {
    const openai = new OpenAI({ auth: auths.openai });

    const response = await openai.createThread({
      messages: [
        {
          role: "user",
          content: variables.content!,
        },
      ],
    });

    console.log("Response data:", response.data);
  },
});
