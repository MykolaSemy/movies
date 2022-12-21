import { useState } from "react";
import { Film, Filters } from "../../services/interfaces";
import SearchProposals from "./SearchProposals";

interface SearchBarProps {
  data: Film[];
  filters: Filters;
  onChange: (newValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ data, filters, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex relative w-2/4 h-full">
      <input
        className="search-input"
        type="text"
        placeholder="Enter movie name"
        value={filters.title}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange(e.target.value.toLowerCase())}
      />
      <div className={`${isFocused ? " flex " : " hidden "} proposed-window `}>
        <SearchProposals data={data} filters={filters} />
      </div>
    </div>
  );
};

export default SearchBar;
