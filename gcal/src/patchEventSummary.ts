import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

defineAction({
  name: "patchEventSummary",
  title: "Patch Event Summary",
  apps: ["gcal"],
  variables: ["calendarId?", "eventId", "summary"],
  run: async ({ auths, variables }) => {
    const gcal = new GoogleCalendar({
      auth: auths.gcal,
    });

    const response = await gcal.patchEvent({
      calendarId: variables.calendarId || "primary",
      eventId: variables.eventId!,
      event: {
        summary: variables.summary!,
      },
    });

    console.log("Response: ", response.data);
  },
});
