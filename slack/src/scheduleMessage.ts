import { dayjsUtc, defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "scheduleMessage",
  title: "Schedule Message",
  apps: ["slack"],
  variables: [
    {
      name: "channel",
      description:
        "Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.",
    },
    {
      name: "delay?",
      description:
        "Amount of time in seconds to delay sending message. Defaults to 60.",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });

    const delay = variables.delay ? parseInt(variables.delay) : 60;
    const response = await slack.scheduleMessage({
      channel: variables.channel!,
      postAt: dayjsUtc().add(delay, "seconds").unix(),
      text: `This message was delayed ${delay} seconds.`,
    });

    console.log("Response data: ", response.data);
  },
});
