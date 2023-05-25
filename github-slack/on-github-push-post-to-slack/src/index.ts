import { GitHub } from "@runlightyear/github";
import { Slack } from "@runlightyear/slack";

const GITHUB_OWNER = "<owner>";
const GITHUB_REPO = "<repo>";
const SLACK_CHANNEL = "<channel>";

GitHub.onPush({
  name: "on-github-push-post-to-slack",
  title: "On GitHub Push Post to Slack",
  owner: GITHUB_OWNER,
  repo: GITHUB_REPO,
  apps: ["slack"],
  run: async ({ data, auths }) => {
    const github = new GitHub({ auth: auths.github });
    const slack = new Slack({ auth: auths.slack });

    await slack.postMessage({
      channel: SLACK_CHANNEL,
      text: `Received a push on ${data.repository.fullName}`,
    });
  },
});
