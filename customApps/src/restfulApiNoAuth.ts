/**
 * Queries the Restful API demo
 *
 * Learn more about this demo API at: https://restful-api.dev/
 */

import { defineAction, RestConnector } from "@runlightyear/lightyear";

class RestfulApi extends RestConnector {
  getBaseUrl() {
    return "https://api.restful-api.dev";
  }
}

defineAction({
  name: "restfulApiCallNoAuth",
  title: "Restful API Call No Auth",
  run: async () => {
    const restfulApi = new RestfulApi({
      auth: undefined,
    });

    const response = await restfulApi.get({
      url: "/objects",
    });

    console.log("Response data: ", response.data);
  },
});
