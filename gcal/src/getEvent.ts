import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

defineAction({
  name: "getEvent",
  title: "Get Event",
  apps: ["gcal"],
  variables: ["calendarId?", "eventId"],
  run: async ({ auths, variables }) => {
    const gcal = new GoogleCalendar({
      auth: auths.gcal,
    });

    const response = await gcal.getEvent({
      calendarId: variables.calendarId || "primary",
      eventId: variables.eventId!,
    });

    console.log("Response: ", response.data);
  },
});
