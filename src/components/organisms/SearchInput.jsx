export default function SearchInput({ onChange }) {
  return (
    <input
      onChange={onChange}
      className="search-input"
      placeholder="What Pokémon are you looking for?"
    />
  );
}
