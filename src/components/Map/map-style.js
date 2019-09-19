import { fromJS } from "immutable";
import MAP_STYLE from "./map-style-basic-v8.json";

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = fromJS({
  id: "data",
  source: "county",
  type: "fill",
  interactive: true,
  paint: {
    "fill-color": [
      "match",
      ["get", "fylkesnummer"],
      ['01'], '#e6194b',
      ['02'], '#3cb44b',
      ['04'], '#4363d8',
      ['05'], '#f58231',
      ['06'], '#911eb4',
      ['07'], '#46f0f0',
      ['08'], '#f032e6',
      ['09'], '#bcf60c',
      ['10'], '#fabebe',
      ['11'], '#008080',
      ['12'], '#e6beff',
      ['13'], '#9a6324',
      ['14'], '#fffac8',
      ['15'], '#800000',
      ['16'], '#aaffc3',
      ['17'], '#808000',
      ['18'], '#ffd8b1',
      ['19'], '#000075',
      ['20'], '#ffe119',
      ['50'], '#808080',
      '#ffffff',
    ],
    "fill-opacity": 0.3
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);


