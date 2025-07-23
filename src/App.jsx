import "./App.css";
import PokemonGenerationsPage from "./components/pages/PokemonGenerationsPage";
import PokemonDetailsPage from "./components/pages/PokemonDetailsPage";
import PokemonGamePage from "./components/pages/PokemonGamePage";
import PokemonSearcher from "./components/pages/PokemonSearcher";
import PokemonTypesPage from "./components/pages/PokemonTypesPage";
import Layout from "./components/template/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PokemonGamePage />} />
          <Route path="home" element={<PokemonSearcher />} />
          <Route path="pokemons/:id" element={<PokemonDetailsPage />} />
          <Route path="generations" element={<PokemonGenerationsPage />} />
          <Route path="types" element={<PokemonTypesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
