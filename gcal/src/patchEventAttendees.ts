import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

defineAction({
  name: "patchEventAttendees",
  title: "Patch Event Attendees",
  apps: ["gcal"],
  variables: ["calendarId?", "eventId", "attendees"],
  run: async ({ auths, variables }) => {
    const gcal = new GoogleCalendar({
      auth: auths.gcal,
    });

    const attendees = variables.attendees!.split(",");

    const response = await gcal.patchEvent({
      calendarId: variables.calendarId || "primary",
      eventId: variables.eventId!,
      event: {
        attendees: attendees.map((email) => ({ email })),
      },
    });

    console.log("Response: ", response.data);
  },
});
