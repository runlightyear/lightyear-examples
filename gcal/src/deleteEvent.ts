import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

defineAction({
  name: "deleteEvent",
  title: "Delete Event",
  apps: ["gcal"],
  variables: ["calendarId?", "eventId"],
  run: async ({ auths, variables }) => {
    const gcal = new GoogleCalendar({
      auth: auths.gcal,
    });

    const response = await gcal.deleteEvent({
      calendarId: variables.calendarId || "primary",
      eventId: variables.eventId!,
    });

    console.log("Response: ", response.data);
  },
});
