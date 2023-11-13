import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "createMessage",
  title: "Create Message",
  apps: ["openai"],
  variables: ["content"],
  run: async ({ auths, variables }) => {
    const openai = new OpenAI({ auth: auths.openai });

    const threadResponse = await openai.createThread();

    console.log("Thread response data:", threadResponse.data);

    const thread = threadResponse.data;

    const response = await openai.createMessage({
      threadId: thread.id,
      role: "user",
      content: variables.content!,
    });

    console.log("Response data:", response.data);
  },
});
