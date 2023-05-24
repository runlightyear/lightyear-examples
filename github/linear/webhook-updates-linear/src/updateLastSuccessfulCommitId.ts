import { WorkflowRunPayload } from "@runlightyear/github";
import { setVariable } from "@runlightyear/lightyear";

export interface UpdateLastSuccessfulCommitIdProps {
  variableName?: string;
  payload: WorkflowRunPayload;
}

export async function updateLastSuccessfulCommitId(
  props: UpdateLastSuccessfulCommitIdProps
) {
  const { variableName = "lastSuccessfulCommitId", payload } = props;

  const headCommitId = payload.workflowRun.headCommit.id;

  await setVariable(variableName, headCommitId);
}
