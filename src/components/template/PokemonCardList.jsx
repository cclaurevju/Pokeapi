import PokemonCard from "../organisms/PokemonCard";
import Button from "../atoms/Button";

function PokemonCardList({ handleLoadMore, pokemons }) {
  return (
    <div className="container pk-card-list content">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />;
      })}
      <div className="virtual-scroll">
        <Button color="secondary" onClick={handleLoadMore} label="Load more" />
      </div>
    </div>
  );
}

export default PokemonCardList;
