import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import {
  getCurrentForecast,
  getExtendedForecast,
} from "../../redux/forecast/forecast.operations";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import { searchHistorySelector } from "../../redux/forecast/forecast.selectors";
import {
  SearchHistoryContainer,
  Title,
  SearchHistoryList,
} from "./SearchHistory.styles";

export const SearchHistory = () => {
  const dispatch = useAppDispatch();
  const searchHistory = useSelector(searchHistorySelector);

  const handleSearch = (e: any) => {
    dispatch(getCurrentForecast(e.target.id));
    dispatch(getExtendedForecast(e.target.id));
  };

  return (
    <BaseContainer>
      <SearchHistoryContainer>
        <Title>Last queries</Title>

        <SearchHistoryList>
          {searchHistory.slice(0, 10).map((el) => (
            <li key={Math.random().toString(36).substr(2, 9)}>
              <button id={el} onClick={handleSearch}>
                {el}
              </button>
            </li>
          ))}
        </SearchHistoryList>
      </SearchHistoryContainer>
    </BaseContainer>
  );
};
