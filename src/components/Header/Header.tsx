import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import { StyledHeader, Logo } from "./Header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <BaseContainer>
        <Logo>WeatherForecast</Logo>
      </BaseContainer>
    </StyledHeader>
  );
};
