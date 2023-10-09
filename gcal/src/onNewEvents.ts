import { GoogleCalendar } from "@runlightyear/gcal";

GoogleCalendar.onNewEvents({
  name: "onNewEvents",
  title: "On New Events",
  run: async ({ data }) => {
    console.info("New events", data);
  },
});
