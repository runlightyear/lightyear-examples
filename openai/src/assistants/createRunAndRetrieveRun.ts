import { defineAction, sleep } from "@runlightyear/lightyear";
import { OpenAI } from "../../../../lightyear/packages/@runlightyear/openai";

defineAction({
  name: "createRunAndRetrieveRun",
  title: "Create Run and Retrieve Run",
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
    console.log("Created thread", thread);

    const createRunResponse = await openai.createRun({
      assistantId: variables.assistantId!,
      threadId: thread.id,
    });
    const run = createRunResponse.data;
    console.log("Created run", run);

    let retrieveRunResponse;
    let updatedRun;
    do {
      await sleep(500);

      retrieveRunResponse = await openai.retrieveRun({
        runId: run.id,
        threadId: run.threadId,
      });
      updatedRun = retrieveRunResponse.data;
    } while (
      updatedRun.status === "queued" ||
      updatedRun.status === "in_progress"
    );

    console.log("Updated run", updatedRun);
  },
});
