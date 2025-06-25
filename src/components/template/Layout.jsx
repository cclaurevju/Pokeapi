import Header from "../organisms/Header";
import "./template.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div>CONTENT</div>
      <div>FOOTER</div>
    </div>
  );
}
