import { defineAction } from "@runlightyear/lightyear";

defineAction({
  name: "actionWithVariables",
  title: "Action with Variables",
  variables: [
    "var1",
    "var2?",
    { name: "var3", description: "Required variable 3" },
    { name: "var4?", description: "Optional variable 4?" },
  ],
  run: async ({ variables }) => {
    console.log("required variable", variables.var1);
    console.log("optional variable", variables.var2);
    console.log("variable with description", variables.var3);
    console.log("optional variable with description", variables.var4);
  },
});
