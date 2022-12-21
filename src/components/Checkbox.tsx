import { GrFormClose } from "react-icons/gr";

interface CheckboxProps {
  onChange: () => void;
  isActive: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, isActive }) => {
  const handleClick = () => onChange();

  return (
    <button className="checkbox" onClick={handleClick}>
      {isActive ? <GrFormClose className="text-xl" /> : ""}
    </button>
  );
};

export default Checkbox;
