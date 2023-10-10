import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "kickFromChannel",
  title: "Kick From Channel",
  apps: ["slack"],
  variables: [
    {
      name: "channel",
      description: "ID of conversation to kick user from. Example: C1234567890",
    },
    {
      name: "user",
      description: "User ID to be removed. Example: W1234567890",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.kickFromConversation({
      channel: variables.channel!,
      user: variables.user!,
    });
    console.log("Response data: ", response.data);
  },
});
