import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

defineAction({
  name: "addEventAttendee",
  title: "Add Event Attendee",
  apps: ["gcal"],
  variables: ["calendarId?", "eventId", "attendee"],
  run: async ({ auths, variables }) => {
    const gcal = new GoogleCalendar({
      auth: auths.gcal,
    });

    const getEventResponse = await gcal.getEvent({
      calendarId: variables.calendarId || "primary",
      eventId: variables.eventId!,
    });

    const event = getEventResponse.data;

    const response = await gcal.patchEvent({
      calendarId: variables.calendarId || "primary",
      eventId: variables.eventId!,
      event: {
        attendees: [...event.attendees, { email: variables.attendee! }],
      },
    });

    console.log("Response: ", response.data);
  },
});
