import { defineAction } from "@runlightyear/lightyear";
import { OpenAI } from "@runlightyear/openai";

defineAction({
  name: "createImage",
  title: "Create Image",
  apps: ["openai"],
  run: async ({ auths }) => {
    const openai = new OpenAI({
      auth: auths.openai,
    });
    const result = await openai.createImage({
      prompt: "A cute baby sea otter",
      n: 2,
      size: "1024x1024",
    });
    const images = result.data.data;
    console.log("Url: ", images[0].url);
  },
});
