import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "lookupUserByEmail",
  title: "Lookup User By Email",
  apps: ["slack"],
  variables: [
    {
      name: "email",
      description: "Email address of user to look up",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.lookupUserByEmail({
      email: variables.email!,
    });
    console.log("Response data: ", response.data);
  },
});
