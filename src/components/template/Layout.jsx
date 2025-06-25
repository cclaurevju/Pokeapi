import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import "./template.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
