import { RootState } from "../store";

export const currentForecastSelector = (state: RootState) =>
  state.forecast.current;
export const extendedForecastSelector = (state: RootState) =>
  state.forecast.extended;
export const searchHistorySelector = (state: RootState) =>
  state.forecast.searchHistory;
