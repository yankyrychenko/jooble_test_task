import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import {
  getCurrentForecast,
  getExtendedForecast,
} from "../../redux/forecast/forecast.operations";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import {
  SearchBarContainer,
  StyledInput,
  StyledSubmitBtn,
} from "./SearchBar.styles";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.length) {
      dispatch(getCurrentForecast(city));
      dispatch(getExtendedForecast(city));
      setCity("");
    }
  };

  return (
    <BaseContainer>
      <SearchBarContainer>
        <form onSubmit={handleSubmit}>
          <label>
            <StyledInput type="text" value={city} onChange={handleChange} />
          </label>

          <StyledSubmitBtn type="submit">Search</StyledSubmitBtn>
        </form>
      </SearchBarContainer>
    </BaseContainer>
  );
};
