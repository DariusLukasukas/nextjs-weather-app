import type { GeocodingFeature } from "@mapbox/search-js-core";

export const DEFAULT_CITIES: GeocodingFeature[] = [
  {
    id: "default-copenhagen",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [12.5683, 55.6761],
    },
    properties: {
      mapbox_id: "default-copenhagen",
      feature_type: "place",
      name: "Copenhagen",
      name_preferred: "Copenhagen",
      full_address: "Copenhagen, Denmark",
      place_formatted: "Denmark",
      coordinates: {
        longitude: 12.5683,
        latitude: 55.6761,
      },
      context: {
        country: {
          mapbox_id: "country-denmark",
          name: "Denmark",
          country_code: "DK",
        },
      },
    },
  } as GeocodingFeature,
  {
    id: "default-london",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-0.1276, 51.5074],
    },
    properties: {
      mapbox_id: "default-london",
      feature_type: "place",
      name: "London",
      name_preferred: "London",
      full_address: "London, United Kingdom",
      place_formatted: "United Kingdom",
      coordinates: {
        longitude: -0.1276,
        latitude: 51.5074,
      },
      context: {
        country: {
          mapbox_id: "country-uk",
          name: "United Kingdom",
          country_code: "GB",
        },
      },
    },
  } as GeocodingFeature,
  {
    id: "default-new-york",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
    properties: {
      mapbox_id: "default-new-york",
      feature_type: "place",
      name: "New York",
      name_preferred: "New York",
      full_address: "New York, NY, United States",
      place_formatted: "New York, United States",
      coordinates: {
        longitude: -74.006,
        latitude: 40.7128,
      },
      context: {
        country: {
          mapbox_id: "country-us",
          name: "United States",
          country_code: "US",
        },
        region: {
          mapbox_id: "region-ny",
          name: "New York",
        },
      },
    },
  } as GeocodingFeature,
];
