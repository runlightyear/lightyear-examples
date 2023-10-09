import { GitHub } from "@runlightyear/github";
import { Slack } from "@runlightyear/slack";
import { SKIPPED } from "@runlightyear/lightyear";

GitHub.onIssues({
  name: "onOpenedIssuePostMessage",
  title: "On Opened Issue Post Message",
  apps: ["slack"],
  variables: ["channel"],
  run: async ({ data, auths, variables }) => {
    const slack = new Slack({ auth: auths.slack });

    if (data.action !== "opened") {
      console.log("Issue was not opened, skipping");
      throw SKIPPED;
    }

    await slack.postMessage({
      channel: variables.channel!,
      text: `Opened issue "${data.issue.title}" by ${data.issue.user.login}`,
    });

    console.log("Posted message to Slack");
  },
});
