import { useNavigate } from "react-router-dom";

export default function HeaderMenuOption({ label, redirectTo }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(redirectTo);
  };
  return (
    <div className="header-menu-option" onClick={handleClick}>
      {label}
    </div>
  );
}
