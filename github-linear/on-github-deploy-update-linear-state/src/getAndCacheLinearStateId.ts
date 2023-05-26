import { setVariable, Variables } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

export async function getAndCacheLinearStateId(props: {
  variables: Variables;
  variableName?: string;
  linear: Linear;
  stateName: string;
}) {
  const { variables, variableName = "stateId", linear, stateName } = props;

  let stateId;
  if (!variables[variableName]) {
    const workflowState = await linear.findWorkflowStateByName({
      name: stateName,
    });

    if (!workflowState) {
      throw Error(`Unknown workflow state: ${stateName}`);
    }

    stateId = workflowState.id;
    await setVariable(variableName, stateId);
  } else {
    stateId = variables[variableName];
  }

  return stateId;
}
