/**
 * Queries the OpenWeatherMap API
 *
 * Learn more about this API at: https://openweathermap.org/api
 *
 * Important: Make sure to create a custom app named "openWeatherMap" before importing this file.
 */

import { defineAction, RestConnector } from "@runlightyear/lightyear";

class OpenWeatherMap extends RestConnector {
  getBaseUrl() {
    return "https://api.openweathermap.org/data/2.5";
  }

  getDefaultParams() {
    const { apiKey } = this.getAuthData();
    return {
      appid: apiKey,
    };
  }
}

defineAction({
  name: "restApiWithApiKey",
  title: "Rest API with API Key",
  customApps: ["openWeatherMap"],
  variables: [
    { name: "lat", description: "Latitude (try 33.44)" },
    { name: "lon", description: "Longitude (try -94.04)" },
  ],
  run: async ({ auths, variables }) => {
    const openWeatherMap = new OpenWeatherMap({
      auth: auths.openWeatherMap,
    });

    const response = await openWeatherMap.get({
      url: "/weather",
      params: {
        lat: variables.lat!,
        lon: variables.lon!,
      },
    });

    console.log("Response data", response.data);
  },
});
