import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

function tomorrow() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().split("T")[0];
}

defineAction({
  name: "createAllDayEvent",
  title: "Create All Day Event",
  apps: ["gcal"],
  variables: ["calendarId?", "summary"],
  run: async ({ auths, variables }) => {
    const gcal = new GoogleCalendar({
      auth: auths.gcal,
    });

    const response = await gcal.createEvent({
      calendarId: variables.calendarId || "primary",
      event: {
        summary: variables.summary!,
        start: {
          date: tomorrow(),
        },
        end: {
          date: tomorrow(),
        },
      },
    });

    console.log("Response: ", response.data);
  },
});
