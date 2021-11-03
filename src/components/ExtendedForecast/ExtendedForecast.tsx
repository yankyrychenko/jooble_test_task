import { useEffect } from "react";
import { useSelector } from "react-redux";
import { extendedForecastSelector } from "../../redux/forecast/forecast.selectors";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import { getExtendedForecast } from "../../redux/forecast/forecast.operations";
import { useAppDispatch } from "../../redux/hooks";
import {
  ExtendedForecastContainer,
  Title,
  DailyForecastList,
} from "./ExtendedForecast.styles";

export const ExtendedForecast = () => {
  const dispatch = useAppDispatch();
  const extendedForecast = useSelector(extendedForecastSelector);

  useEffect(() => {
    dispatch(getExtendedForecast("Kyiv"));
  }, [dispatch]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <BaseContainer>
      <ExtendedForecastContainer>
        <Title>Extended Forecast</Title>

        <DailyForecastList>
          {extendedForecast
            ?.filter((_: any, i: number) => i % 8 === 8 - 1)
            .map((el: any) => (
              <li key={el.dt}>
                <p>{days[new Date(el.dt * 1000).getDay()]}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@4x.png`}
                  alt={el.weather[0].main}
                />
                <p>{el.weather[0].main}</p>
                <p>{Math.round(el.main.temp)}&deg;</p>
              </li>
            ))}
        </DailyForecastList>
      </ExtendedForecastContainer>
    </BaseContainer>
  );
};
