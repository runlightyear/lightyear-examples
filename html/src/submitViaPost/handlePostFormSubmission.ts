import { defineAction, defineWebhook } from "@runlightyear/lightyear";

const webhook = defineWebhook({
  name: "receivePostFormSubmission",
  title: "Receive POST Form Submission",
});

defineAction({
  name: "processPostFormSubmission",
  title: "Process POST Form Submission",
  trigger: {
    webhook: webhook,
  },
  run: async ({ data }) => {
    console.log(data);
    console.log("First Name:", data.body.fname);
    console.log("Last Name:", data.body.lname);
  },
});
