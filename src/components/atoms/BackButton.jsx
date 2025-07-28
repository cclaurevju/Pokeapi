import arrowIcon from "../../assets/icons/back.svg";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("..", { relative: true });
  };

  return (
    <div onClick={handleClick}>
      <img src={arrowIcon} alt="back button" />
    </div>
  );
}
