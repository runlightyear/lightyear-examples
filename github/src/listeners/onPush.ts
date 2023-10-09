import { GitHub } from "@runlightyear/github";

GitHub.onPush({
  name: "onPush",
  title: "On Push",
  run: async ({ data, auths }) => {
    console.log("Push data: ", data);
  },
});
