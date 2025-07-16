import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "../src/components/atoms/atoms.css";
import "../src/components/molecules/molecules.css";
import "../src/components/organisms/organisms.css";
import "../src/components/template/template.css";
import "../src/components/pages/pages.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonSearcher from "./components/pages/PokemonSearcher.jsx";
import PokemonGamePage from "./components/pages/PokemonGamePage.jsx";
import PokemonDetailsPage from "./components/pages/PokemonDetailsPage.jsx";
import PokemonGenerationsPage from "./components/pages/PokemonGenerationsPage.jsx";
import PokemonTypesPage from "./components/pages/PokemonTypesPage.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import Layout from "./components/template/Layout.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PokemonGamePage />,
      },
      {
        path: "pokemons",
        children: [
          { index: true, element: <PokemonSearcher /> },
          {
            path: ":id",
            element: <PokemonDetailsPage />,
          },
        ],
      },
      {
        path: "generations",
        element: <PokemonGenerationsPage />,
      },
      {
        path: "types",
        element: <PokemonTypesPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
