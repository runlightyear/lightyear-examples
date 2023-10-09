import { GitHub } from "@runlightyear/github";
import { SKIPPED } from "@runlightyear/lightyear";

GitHub.onIssues({
  name: "onIssueOpened",
  title: "On Issue Opened",
  run: async ({ data, auths }) => {
    if (data.action !== "opened") {
      throw SKIPPED;
    }
    console.log("Issue opened:", data.issue);
  },
});
