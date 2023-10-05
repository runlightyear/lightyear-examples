import { GoogleCalendar } from "@runlightyear/gcal";

GoogleCalendar.onNewAndUpdatedEvents({
  name: "onNewAndUpdatedEvents",
  title: "On New and Updated Events",
  run: async ({ data }) => {
    console.info("New and updated events", data);
  },
});
