/**
 * DOES NOT WORK YET. Lightyear needs a platform enhancement before we can support this.
 */
import { defineAction } from "@runlightyear/lightyear";
import { Notion } from "@runlightyear/notion";
import invariant from "tiny-invariant";

defineAction({
  name: "retrievePageLimitProps",
  title: "Retrieve Page Limit Props",
  apps: ["notion"],
  variables: ["pageId"],
  run: async ({ auths, variables }) => {
    invariant(variables.pageId, "Page ID is required");
    const notion = new Notion({ auth: auths.notion });
    const result = await notion.retrievePage({
      pageId: variables.pageId,
      filterProperties: ["title", "bbjG"],
    });
    console.log("Page: ", result.data);
  },
});
