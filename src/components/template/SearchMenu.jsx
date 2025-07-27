import SearchInput from "../organisms/SearchInput";

export default function SearchMenu({ onChange }) {
  return (
    <div className="search-menu subheader">
      <div className="search-content">
        <div className="search-menu-content-dots rotate-180">
          <img
            className="search-menu-contant-dots-img"
            src="src\assets\images\masks\dots-horizontal.png"
            alt=""
          />
        </div>
        <SearchInput onChange={onChange} />
        <div className="search-menu-content-dots">
          <img
            className="search-menu-contant-dots-img"
            src="src\assets\images\masks\dots-horizontal.png"
            alt=""
          />
        </div>
      </div>
      <p className="search-menu-content-helper">
        Search for Pokémon by name or using the National Pokédex number
      </p>
    </div>
  );
}
