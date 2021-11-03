import styled from "styled-components/macro";

export const CurrentForecastContainer = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 15px;
  background-color: #ffffff;
`;

export const TempContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Temp = styled.p`
  font-size: 6rem;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const TempWrap = styled.div`
  margin: 0 0 30px 0;

  @media screen and (min-width: 576px) {
    margin: 0 50px 0 0;
  }
`;

export const WeatherStatus = styled.p`
  padding-left: 50px;
  font-size: 1.5rem;
`;

export const CurrentForecastWrapper = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
    align-items: center;
  }
`;
