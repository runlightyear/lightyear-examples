import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "listModels",
  title: "List Models",
  apps: ["openai"],
  run: async ({ auths }) => {
    const openai = new OpenAI({
      auth: auths.openai,
    });
    const result = await openai.listModels();
    const models = result.data.data;
    console.log("Model ids: ", models.map((model) => model.id).join(", "));
  },
});
