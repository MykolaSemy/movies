import Checkbox from "../Checkbox";
import { clearCategoryFilter } from "../../utils/filtersUtils";
import { FiltersStateType } from "../../services/interfaces";

interface OptionsStringProps {
  options: string[];
  onChange: (args: any) => void;
  filterState: FiltersStateType;
}

const OptionsString: React.FC<OptionsStringProps> = ({
  onChange,
  options,
  filterState,
}) => {
  const { filters, setFilters } = filterState;
  return (
    <>
      <div className="option">
        <Checkbox
          onChange={() => clearCategoryFilter(setFilters)}
          isActive={!filters.category.length}
        />
        <span className="mr-3 whitespace-nowrap">Any genre</span>
      </div>
      {options.map((option, id) => (
        <div key={id} className="option">
          <Checkbox
            onChange={() => onChange(option)}
            isActive={filters.category.includes(option)}
          />
          <span className="mr-3 whitespace-nowrap">{option}</span>
        </div>
      ))}
    </>
  );
};

export default OptionsString;
