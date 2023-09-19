import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "postMessage",
  title: "Post Message",
  apps: ["slack"],
  variables: ["channel", "text"],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.postMessage({
      channel: variables.channel!,
      text: variables.text!,
    });
    console.log("Response: ", response.data);
  },
});
