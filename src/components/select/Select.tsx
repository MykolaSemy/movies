import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiltersStateType } from "../../services/interfaces";
import OptionsStars from "./OptionsStars";
import OptionsString from "./OptionsString";

interface SelectProps {
  name: string;
  options: any[];
  optionsType: "strings" | "stars";
  onChange: (args: any) => void;
  filterState: FiltersStateType;
  activeState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  onChange,
  filterState,
  optionsType,
  activeState,
}) => {
  const [isActive, setIsActive] = activeState;
  return (
    <div onClick={(e) => e.stopPropagation()} className="select">
      {name}
      <button className="mx-2" onClick={() => setIsActive((prev) => !prev)}>
        {isActive ? <BsChevronUp /> : <BsChevronDown />}
      </button>
      <div className={`${isActive ? "absolute" : "hidden"} options-window`}>
        {optionsType === "stars" && (
          <OptionsStars
            options={options}
            onChange={onChange}
            filterState={filterState}
          />
        )}
        {optionsType === "strings" && (
          <OptionsString
            options={options}
            onChange={onChange}
            filterState={filterState}
          />
        )}
      </div>
    </div>
  );
};

export default Select;
