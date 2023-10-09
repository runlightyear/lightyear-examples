import { defineAction, defineWebhook } from "@runlightyear/lightyear";

const webhook = defineWebhook({
  name: "receiveGetFormSubmission",
  title: "Receive GET Form Submission",
});

defineAction({
  name: "processGetFormSubmission",
  title: "Process GET Form Submission",
  trigger: {
    webhook: webhook,
  },
  run: async ({ data }) => {
    console.log(data);
    console.log("First Name:", data.params.fname);
    console.log("Last Name:", data.params.lname);
  },
});
