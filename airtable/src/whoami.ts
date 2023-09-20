import { defineAction } from "@runlightyear/lightyear";
import { Airtable } from "@runlightyear/airtable";

defineAction({
  name: "whoami",
  title: "Who Am I?",
  apps: ["airtable"],
  run: async ({ auths, variables }) => {
    const airtable = new Airtable({ auth: auths.airtable });

    const response = await airtable.whoami();

    console.log("Response: ", response.data);
  },
});
