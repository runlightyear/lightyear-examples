import { GoogleCalendar } from "@runlightyear/gcal";
import { SKIPPED } from "@runlightyear/lightyear";

GoogleCalendar.onNewEvents({
  name: "onNewMatchingEvents",
  title: "On New Matching Events",
  variables: [
    { name: "term", description: "Event title must contain this term" },
  ],
  run: async ({ data, variables }) => {
    const testEvents = data.filter((event) =>
      event.summary.includes(variables.term!)
    );

    if (testEvents.length === 0) {
      throw SKIPPED;
    }

    console.log(`New events matching ${variables.term!}:`, testEvents);
  },
});
