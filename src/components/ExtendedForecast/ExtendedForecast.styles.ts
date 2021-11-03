import styled from "styled-components/macro";

export const ExtendedForecastContainer = styled.div`
  padding: 15px;
  border-radius: 15px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const DailyForecastList = styled.ul`
  @media screen and (min-width: 576px) {
    display: flex;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;

    border: 0.5px solid rgba(0, 0, 0, 0.5);
    border-radius: 15px;

    &:not(:last-child) {
      margin: 0 0 30px 0;
    }

    @media screen and (min-width: 576px) {
      &:not(:last-child) {
        margin: 0 15px 0 0;
      }
    }
  }
`;
