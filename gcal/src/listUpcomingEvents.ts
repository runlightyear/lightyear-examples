import { defineAction } from "@runlightyear/lightyear";
import { GoogleCalendar } from "@runlightyear/gcal";

function addDays(date: Date, days: number) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

defineAction({
  name: "listUpcomingEvents",
  title: "List Upcoming Events",
  apps: ["gcal"],
  variables: ["calendarId?"],
  run: async ({ auths, variables }) => {
    const gcal = new GoogleCalendar({
      auth: auths.gcal,
    });

    const response = await gcal.listEvents({
      calendarId: variables.calendarId || "primary",
      timeMin: new Date().toISOString(),
      timeMax: addDays(new Date(), 2).toISOString(),
    });

    console.log("Response: ", response.data);
  },
});
