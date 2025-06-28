import "./App.css";
import PokemonSearcher from "./components/pages/PokemonSearcher";
import Layout from "./components/template/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PokemonSearcher />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
