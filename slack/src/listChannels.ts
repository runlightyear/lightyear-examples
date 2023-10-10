import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "listChannels",
  title: "List Channels",
  apps: ["slack"],
  run: async ({ auths }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.listConversations();
    console.log("Response data: ", response.data);
  },
});
