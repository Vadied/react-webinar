import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/characters/new"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Aggiungi Personaggio
      </NavLink>
      <NavLink
        to="/species/new"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Aggiungi Genia
      </NavLink>
    </div>
  );
};

export default Header;
