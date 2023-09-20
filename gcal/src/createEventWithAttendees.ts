import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

function addHours(date: Date, hours: number) {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

defineAction({
  name: "createEventWithAttendees",
  title: "Create Event with Attendees",
  apps: ["gcal"],
  variables: ["calendarId?", "summary", "attendees"],
  run: async ({ auths, variables }) => {
    const gcal = new GoogleCalendar({
      auth: auths.gcal,
    });

    const attendees = variables.attendees!.split(",");

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
        attendees: attendees.map((email) => ({
          email,
        })),
      },
    });

    console.log("Response: ", response.data);
  },
});
