import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "leaveChannel",
  title: "Leave Channel",
  apps: ["slack"],
  variables: [
    {
      name: "channel",
      description: "ID of conversation to leave. Example: C1234567890",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.leaveConversation({
      channel: variables.channel!,
    });
    console.log("Response data: ", response.data);
  },
});
