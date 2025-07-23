import { useNavigate } from "react-router-dom";
import HeaderBrandTitle from "../atoms/HeaderBrandTitle";

export default function HeaderBrand() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="header-brand" onClick={handleClick}>
      <img src="src/assets/images/brand/brand.png" alt="" />{" "}
      <HeaderBrandTitle />
    </div>
  );
}
