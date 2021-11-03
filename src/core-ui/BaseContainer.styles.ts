import styled from "styled-components/macro";

export const BaseContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 576px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;
