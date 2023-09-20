import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

function addHours(date: Date, hours: number) {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

defineAction({
  name: "updateEvent",
  title: "Update Event",
  apps: ["gcal"],
  variables: ["calendarId?", "eventId", "summary"],
  run: async ({ auths, variables }) => {
    const gcal = new GoogleCalendar({
      auth: auths.gcal,
    });

    const response = await gcal.updateEvent({
      calendarId: variables.calendarId || "primary",
      eventId: variables.eventId!,
      event: {
        summary: variables.summary!,
        start: {
          dateTime: addHours(new Date(), 2).toISOString(),
        },
        end: {
          dateTime: addHours(new Date(), 3).toISOString(),
        },
      },
    });

    console.log("Response: ", response.data);
  },
});
