import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import "./template.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
