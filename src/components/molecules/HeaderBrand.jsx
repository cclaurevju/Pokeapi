import HeaderBrandTitle from "../atoms/HeaderBrandTitle";
import "./molecules.css";

export default function HeaderBrand() {
  return (
    <div className="header-brand">
      <img src="src/assets/images/brand/brand.png" alt="" />{" "}
      <HeaderBrandTitle />
    </div>
  );
}
