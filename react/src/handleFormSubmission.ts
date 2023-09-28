import { defineAction, defineWebhook } from "@runlightyear/lightyear";

const webhook = defineWebhook({
  name: "receiveFormSubmission",
  title: "Receive Form Submission",
});

defineAction({
  name: "processFormSubmission",
  title: "Process Form Submission",
  trigger: {
    webhook,
  },
  run: async ({ data }) => {
    console.log("data", data);
    const formData = JSON.parse(data.body);
    console.log("First Name:", formData.firstName);
    console.log("Last Name:", formData.lastName);
  },
});
