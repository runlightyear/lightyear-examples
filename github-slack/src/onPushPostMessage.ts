import { GitHub } from "@runlightyear/github";
import { Slack } from "@runlightyear/slack";

GitHub.onPush({
  name: "onPushPostMessage",
  title: "On Push Post Message",
  apps: ["slack"],
  variables: ["channel"],
  run: async ({ data, auths, variables }) => {
    const slack = new Slack({ auth: auths.slack });

    await slack.postMessage({
      channel: variables.channel!,
      text: `Pushed to ${data.repository.fullName} by ${data.pusher.name}`,
    });

    console.log("Posted message to Slack");
  },
});
