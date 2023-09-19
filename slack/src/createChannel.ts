import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "createChannel",
  title: "Create Channel",
  apps: ["slack"],
  variables: ["channelName"],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.createConversation({
      name: variables.channelName!,
      isPrivate: false,
    });
    console.log("Response: ", response.data);
  },
});
