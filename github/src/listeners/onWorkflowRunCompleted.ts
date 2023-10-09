import { GitHub } from "@runlightyear/github";
import { SKIPPED } from "@runlightyear/lightyear";

GitHub.onWorkflowRun({
  name: "onWorkflowRunCompleted",
  title: "On Workflow Run Completed",
  run: async ({ data, auths }) => {
    console.log("Workflow run data: ", data);
    if (data.action !== "completed") {
      throw SKIPPED;
    }
    console.log("Workflow run completed:", data);
  },
});
