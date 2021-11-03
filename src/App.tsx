import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CurrentForecast } from "./components/CurrentForecast";
import { ExtendedForecast } from "./components/ExtendedForecast";
import { SearchHistory } from "./components/SearchHistory";

const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <SearchHistory />
      <CurrentForecast />
      <ExtendedForecast />
    </>
  );
};

export default App;
