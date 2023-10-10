import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "joinChannel",
  title: "Join Channel",
  apps: ["slack"],
  variables: [
    {
      name: "channel",
      description: "ID of conversation to join. Example: C1234567890",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.joinConversation({
      channel: variables.channel!,
    });
    console.log("Response data: ", response.data);
  },
});
