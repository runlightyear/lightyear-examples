import { defineAction } from "@runlightyear/lightyear";
import { Linear } from "@runlightyear/linear";

function subtractDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

defineAction({
  name: "listIssuesCreatedRecently",
  title: "List Issues Created Recently",
  apps: ["linear"],
  run: async ({ auths }) => {
    const linear = new Linear({
      auth: auths.linear,
    });

    const response = await linear.listIssues({
      filter: { createdAt: { gt: subtractDays(new Date(), 3).toISOString() } },
      orderBy: "createdAt",
    });

    console.log("Response: ", response.data);
  },
});
