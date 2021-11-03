import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";
const REACT_APP_OPEN_WEATHER_API_KEY = "380f6aeddfee623e5ad4264901234639";

export const getCurrentForecast = createAsyncThunk(
  "forecast/current",
  async (city: string) => {
    try {
      const response = await axios.get(
        `/weather?q=${city}&appid=${REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getExtendedForecast = createAsyncThunk(
  "forecast/extended",
  async (city: string) => {
    try {
      const response = await axios.get(
        `/forecast?q=${city}&appid=${REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
