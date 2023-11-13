import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "createRun",
  title: "Create Run",
  apps: ["openai"],
  variables: ["assistantId", "content"],
  run: async ({ auths, variables }) => {
    const openai = new OpenAI({ auth: auths.openai });

    const threadResponse = await openai.createThread({
      messages: [
        {
          role: "user",
          content: variables.content!,
        },
      ],
    });
    const thread = threadResponse.data;

    const response = await openai.createRun({
      assistantId: variables.assistantId!,
      threadId: thread.id,
    });

    console.log("Response data:", response.data);
  },
});
