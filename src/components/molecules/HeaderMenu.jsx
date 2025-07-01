import HeaderMenuOption from "../atoms/HeaderMenuOption";

export default function HeaderMenu() {
  return (
    <div className="header-menu">
      <HeaderMenuOption label="Home" />
      <HeaderMenuOption label="Types" />
      <HeaderMenuOption label="Generations" />
    </div>
  );
}
