import "./pages.css";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="content not-found-page">
      <img src="src/assets/images/404.png" alt="" />
      <p className="page-not-found-text">Page not found</p>
      <Button label="Back to home" onClick={() => navigate("/")} />
    </div>
  );
}
