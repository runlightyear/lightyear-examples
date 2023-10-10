import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "postMessage",
  title: "Post Message",
  apps: ["slack"],
  variables: [
    {
      name: "channel",
      description:
        "Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.",
    },
    {
      name: "text",
      description: "The formatted text of the message to be published.",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.postMessage({
      channel: variables.channel!,
      text: variables.text!,
    });
    console.log("Response data: ", response.data);
  },
});
