import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "../src/components/atoms/atoms.css";
import "../src/components/molecules/molecules.css";
import "../src/components/organisms/organisms.css";
import "../src/components/template/template.css";
import "../src/components/pages/pages.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
