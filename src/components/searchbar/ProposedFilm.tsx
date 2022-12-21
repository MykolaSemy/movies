import { Film } from "../../services/interfaces";
import Stars from "../Stars";

interface ProposedFilmProps {
  film: Film;
}

const ProposedFilm: React.FC<ProposedFilmProps> = ({ film }) => {
  return (
    <div className="proposed ">
      <div className="w-full flex flex-col items-start justify-start">
        <h1>{film.title}</h1>
        <div>
          <Stars rating={film.rating} />
        </div>
      </div>
      <div>
        <span className="w-fit opacity-70 whitespace-nowrap">
          {film.category}
        </span>
      </div>
    </div>
  );
};

export default ProposedFilm;
