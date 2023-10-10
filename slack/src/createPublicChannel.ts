import { defineAction } from "@runlightyear/lightyear";
import { Slack } from "@runlightyear/slack";

defineAction({
  name: "createPublicChannel",
  title: "Create Public Channel",
  apps: ["slack"],
  variables: [
    {
      name: "name",
      description: "Name of the public channel to create",
    },
  ],
  run: async ({ auths, variables }) => {
    const slack = new Slack({
      auth: auths.slack,
    });
    const response = await slack.createConversation({
      name: variables.name!,
      isPrivate: false,
    });
    console.log("Response data: ", response.data);
  },
});
