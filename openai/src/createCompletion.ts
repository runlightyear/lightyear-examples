import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "createCompletion",
  title: "Create Completion",
  apps: ["openai"],
  run: async ({ auths }) => {
    const openai = new OpenAI({
      auth: auths.openai,
    });
    const result = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      maxTokens: 7,
      temperature: 0,
    });
    const choice = result.data.choices[0];
    const completion = choice.text;
    console.log("Completion: ", completion);
  },
});
