import { useEffect, useState } from "react";
import SearchBar from "./components/searchbar/SearchBar";
import Select from "./components/select/Select";
import { films } from "./services/films";
import { Film, Filters } from "./services/interfaces";
import { getValuesByKey } from "./utils/getValuesByKey";
import {
  changeCategoryFilter,
  changeRatingFilter,
  changeTitleFilter,
} from "./utils/filtersUtils";
import { ratings } from "./services/ratings";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [data, setData] = useState<Film[]>([]);
  const [filters, setFilters] = useState<Filters>({
    title: "",
    category: [],
    rating: 0,
  });
  const [isActiveRating, setIsActiveRating] = useState(false);
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const filterState = { filters: filters, setFilters: setFilters };

  useEffect(() => {
    setData(films);
  }, []);

  return (
    <div
      onClick={() => {
        setIsActiveCategory(false);
        setIsActiveRating(false);
      }}
      className="app"
    >
      <header className="header">
        <SearchBar
          data={data}
          filters={filters}
          onChange={(newTitle: string) =>
            changeTitleFilter(setFilters, newTitle)
          }
        />
        <Select
          name={"Rating"}
          options={ratings}
          optionsType={"stars"}
          filterState={filterState}
          onChange={(newRating: number) =>
            changeRatingFilter(setFilters, newRating)
          }
          activeState={[isActiveRating, setIsActiveRating]}
        />
        <Select
          name={"Genre"}
          optionsType={"strings"}
          options={getValuesByKey(data, "category")}
          filterState={filterState}
          onChange={(newCategory: string) =>
            changeCategoryFilter(setFilters, newCategory)
          }
          activeState={[isActiveCategory, setIsActiveCategory]}
        />
      </header>
    </div>
  );
};

export default App;
