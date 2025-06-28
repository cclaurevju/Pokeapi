import "./App.css";
import Footer from "./components/organisms/Footer";
import PokemonSearcher from "./components/pages/PokemonSearcher";
import Layout from "./components/template/Layout";
import PokemonCardList from "./components/template/PokemonCardList";
import SearchMenu from "./components/template/SearchMenu";

export default function App() {
  return (
    <Layout>
      <div>
        <SearchMenu />
        <PokemonCardList />
      </div>
    </Layout>
  );
}
