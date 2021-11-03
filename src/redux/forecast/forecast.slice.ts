import { createSlice } from "@reduxjs/toolkit";
import { getCurrentForecast, getExtendedForecast } from "./forecast.operations";
import { ICurrentForecast } from "../../interfaces/currentForecast.interface";
import { IExtendedForecast } from "../../interfaces/extendedForecast.interface";

export interface IForecastState {
  current: ICurrentForecast;
  extended: IExtendedForecast[];
  searchHistory: string[];
}

const initialState: IForecastState = {
  current: {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    ],
    base: "",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      message: 0,
      country: "",
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  },
  extended: [
    {
      coord: {
        lat: 0,
        lon: 0,
      },
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      base: "",
      main: {
        temp: 0,
        pressure: 0,
        humidity: 0,
        temp_min: 0,
        temp_max: 0,
      },
      visibility: 0,
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
      clouds: {
        all: 0,
      },
      dt: 0,
      sys: {
        type: 0,
        id: 0,
        message: 0,
        country: "",
        sunrise: 0,
        sunset: 0,
      },
      id: 0,
      name: "",
      cod: 0,
    },
  ],
  searchHistory: [],
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentForecast.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          current: { ...action?.payload },
          searchHistory: [action?.payload?.name, ...state.searchHistory],
        };
      }
    });

    builder.addCase(getExtendedForecast.fulfilled, (state, action) => {
      if (action.payload) {
        return { ...state, extended: action?.payload?.list };
      }
    });
  },
});
