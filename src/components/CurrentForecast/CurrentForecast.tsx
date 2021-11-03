import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { getCurrentForecast } from "../../redux/forecast/forecast.operations";
import { currentForecastSelector } from "../../redux/forecast/forecast.selectors";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import {
  CurrentForecastContainer,
  Title,
  TempContainer,
  Temp,
  CurrentForecastWrapper,
  WeatherStatus,
  TempWrap,
} from "./CurrentForecast.styles";

export const CurrentForecast = () => {
  const dispatch = useAppDispatch();
  const currentWeather = useSelector(currentForecastSelector);

  useEffect(() => {
    dispatch(getCurrentForecast("Kyiv"));
  }, [dispatch]);

  return (
    <BaseContainer>
      <CurrentForecastContainer>
        <Title>Current Forecast</Title>
        <h3>{currentWeather.name}</h3>

        <CurrentForecastWrapper>
          <TempWrap>
            <TempContainer>
              <div>
                <img
                  src={
                    currentWeather.weather &&
                    `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`
                  }
                  alt={currentWeather.weather && currentWeather.weather[0].main}
                  width="150px"
                />

                <WeatherStatus>
                  {currentWeather.weather && currentWeather.weather[0].main}
                </WeatherStatus>
              </div>

              <Temp>{Math.round(currentWeather?.main?.temp)}&deg;</Temp>
            </TempContainer>
          </TempWrap>

          <div>
            <p>
              Feels like: {Math.round(currentWeather?.main?.feels_like)}&deg;
            </p>
            <p>Temp min: {Math.round(currentWeather?.main?.temp_min)}&deg;</p>
            <p>Temp max: {Math.round(currentWeather?.main?.temp_max)}&deg;</p>
            <p>Pressure: {currentWeather?.main?.pressure}hPa</p>
            <p>Humidity: {currentWeather?.main?.humidity}%</p>
            <p>Wind speed: {currentWeather?.wind?.speed}kph</p>
          </div>
        </CurrentForecastWrapper>
      </CurrentForecastContainer>
    </BaseContainer>
  );
};
