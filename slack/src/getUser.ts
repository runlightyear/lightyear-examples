import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "getUser",
  title: "Get User",
  apps: ["slack"],
  variables: [
    {
      name: "user",
      description: "User to get info on. Example: W1234567890",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.getUser({
      user: variables.user!,
    });
    console.log("Response data: ", response.data);
  },
});
