import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "listUsers",
  title: "List Users",
  apps: ["slack"],
  run: async ({ auths }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.listUsers();
    console.log("Response data: ", response.data);
  },
});
