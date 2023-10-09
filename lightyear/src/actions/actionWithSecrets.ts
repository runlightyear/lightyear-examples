import { defineAction } from "@runlightyear/lightyear";

defineAction({
  name: "actionWithSecrets",
  title: "Action with Secrets",
  secrets: [
    "secret1",
    "secret2?",
    {
      name: "secret3",
      description: "Required secret 3",
    },
    {
      name: "secret4?",
      description: "Optional secret 4",
    },
  ],
  run: async ({ secrets }) => {
    console.log("required secret", secrets.secret1);
    console.log("optional secret", secrets.secret2);
    console.log("secret with description", secrets.secret3);
    console.log("optional secret with description", secrets.secret4);
  },
});
