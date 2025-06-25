import HeaderMenuOption from "../atoms/HeaderMenuOption";
import "./molecules.css";

export default function HeaderMenu() {
  return (
    <div className="header-menu">
      <HeaderMenuOption />
      <HeaderMenuOption />
      <HeaderMenuOption />
    </div>
  );
}
