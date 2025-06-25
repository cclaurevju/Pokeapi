import Header from "../organisms/Header";
import "./template.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}
