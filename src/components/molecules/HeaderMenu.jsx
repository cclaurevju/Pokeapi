import HeaderMenuOption from "../atoms/HeaderMenuOption";

export default function HeaderMenu() {
  return (
    <div className="header-menu">
      <HeaderMenuOption label="Home" redirectTo={"/pokemons"} />
      <HeaderMenuOption label="Types" redirectTo={"/types"} />
      <HeaderMenuOption label="Generations" redirectTo={"/generations"} />
    </div>
  );
}
