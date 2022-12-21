import { FiltersStateType } from "../../services/interfaces";
import { clearRatingFilter } from "../../utils/filtersUtils";
import Checkbox from "../Checkbox";
import Stars from "../Stars";

interface OptionsStarsProps {
  options: number[];
  onChange: (args: any) => void;
  filterState: FiltersStateType;
}

const OptionsStars: React.FC<OptionsStarsProps> = ({
  options,
  onChange,
  filterState,
}) => {
  const { filters, setFilters } = filterState;
  return (
    <>
      <div className="option">
        <Checkbox
          onChange={() => clearRatingFilter(setFilters)}
          isActive={!filters.rating}
        />
        <div className="flex justify-center items-center mr-4">
          <span className="mr-3 whitespace-nowrap">Any rating</span>
        </div>
      </div>
      {options.map((option, id) => (
        <div key={id} className="option">
          <Checkbox
            onChange={() => onChange(option)}
            isActive={filters.rating === option}
          />
          <div className="flex justify-center items-center mr-4">
            <Stars rating={option} />
          </div>
        </div>
      ))}
    </>
  );
};

export default OptionsStars;
