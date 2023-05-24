import { WorkflowRunPayload } from "@runlightyear/github";

export interface DeployWasSuccessfulProps {
  branch?: string;
  payload: WorkflowRunPayload;
}

export function deployWasSuccessful(props: DeployWasSuccessfulProps) {
  const { payload, branch = "main" } = props;

  if (payload.action === "completed") {
    if (payload.workflowRun.conclusion === "success") {
      if (payload.workflowRun.headBranch === branch) {
        return true;
      }
    }
  }
  return false;
}
