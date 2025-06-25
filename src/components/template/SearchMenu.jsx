import SearchInput from "../organisms/SearchInput";
import "./template.css";

export default function SearchMenu() {
  return (
    <div className="search-menu">
      <div className="search-content">
        <div className="search-menu-content-dots rotate-180">
          <img
            className="search-menu-contant-dots-img"
            src="src\assets\images\masks\dots-horizontal.png"
            alt=""
          />
        </div>
        <SearchInput />
        <div className="search-menu-content-dots">
          <img
            className="search-menu-contant-dots-img"
            src="src\assets\images\masks\dots-horizontal.png"
            alt=""
          />
        </div>
      </div>
      {/* <div>options</div> */}
    </div>
  );
}
