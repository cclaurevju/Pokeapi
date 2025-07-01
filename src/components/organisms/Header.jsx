import HeaderBrand from "../molecules/HeaderBrand";
import HeaderMenu from "../molecules/HeaderMenu";

export default function Header() {
  return (
    <div className="header">
      <HeaderBrand />
      <HeaderMenu />
    </div>
  );
}
