import HeaderBrand from "../molecules/HeaderBrand";
import HeaderMenu from "../molecules/HeaderMenu";
import "./organisms.css";

export default function Header() {
  return (
    <div>
      <HeaderBrand />
      <HeaderMenu />
    </div>
  );
}
