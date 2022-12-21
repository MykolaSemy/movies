import { Film, Filters } from "../../services/interfaces";
import { useFilterData } from "../../hooks/useFilterData";
import ProposedFilm from "./ProposedFilm";

export interface SearchProposalsProps {
  data: Film[];
  filters: Filters;
}

const SearchProposals: React.FC<SearchProposalsProps> = ({ data, filters }) => {
  const filtered = useFilterData(data, filters);
  return (
    <>
      {filtered.map((film, id) => (
        <ProposedFilm film={film} key={id} />
      ))}
    </>
  );
};

export default SearchProposals;
