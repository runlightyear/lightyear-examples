import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

function addHours(date: Date, hours: number) {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

defineAction({
  name: "createEvent",
  title: "Create Event",
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
          dateTime: addHours(new Date(), 1).toISOString(),
        },
        end: {
          dateTime: addHours(new Date(), 2).toISOString(),
        },
      },
    });

    console.log("Response: ", response.data);
  },
});
