import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "postMessageWithBlocks",
  title: "Post Message With Blocks",
  apps: ["slack"],
  variables: [
    {
      name: "channel",
      description:
        "Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({ auth: auths.slack });

    const response = await slack.postMessage({
      channel: variables.channel!,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "The header of the message",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "A message *with some bold text* and _some italicized text_.",
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: "*Priority*\nHigh",
            },
            {
              type: "mrkdwn",
              text: "*Assignee*\nJohn",
            },
            {
              type: "mrkdwn",
              text: "*Labels*\nBug",
            },
            {
              type: "mrkdwn",
              text: "*Milestone*\nRelease 1.0",
            },
          ],
        },
      ],
      text: "Text for screens where blocks are not supported.",
    });

    console.log("Response data: ", response.data);
  },
});
