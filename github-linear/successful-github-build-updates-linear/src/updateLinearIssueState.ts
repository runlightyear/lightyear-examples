import { Linear } from "@runlightyear/linear";

export async function updateLinearIssueState(props: {
  linear: Linear;
  identifier: string;
  stateId: string;
}) {
  const { identifier, linear, stateId } = props;

  const issue = await linear.findIssueByIdentifier({ identifier });
  if (!issue) {
    console.error(`Issue not found: ${identifier}`);
    return;
  }

  await linear.updateIssue({
    id: issue.id,
    stateId,
  });
}
