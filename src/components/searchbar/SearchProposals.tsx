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
      {!filtered.length && (
        <span className="p-10 w-full opacity-70 text-center">
          Oops! There are no films by that filters!
        </span>
      )}
    </>
  );
};

export default SearchProposals;
