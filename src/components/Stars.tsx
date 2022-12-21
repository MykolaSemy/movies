import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { useSliceByOne } from "../hooks/useSliceByOne";

interface StarsProps {
  rating: number;
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
  const stars = useSliceByOne(rating, 10);

  return (
    <div className="flex ">
      {stars.map((star: number, id: number) => {
        if (star === 1) return <BsStarFill key={id} />;
        else if (star === 0) return <BsStar key={id} />;
        else return <BsStarHalf key={id} />;
      })}
    </div>
  );
};

export default Stars;
