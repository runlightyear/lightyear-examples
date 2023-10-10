import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "inviteToChannel",
  title: "Invite to Channel",
  apps: ["slack"],
  variables: [
    {
      name: "channel",
      description: "ID of the channel to invite user to. Example: C1234567890",
    },
    {
      name: "user",
      description: "ID of the user to invite. Example: U3456789012",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.inviteToConversation({
      channel: variables.channel!,
      users: [variables.user!],
    });
    console.log("Response data: ", response.data);
  },
});
