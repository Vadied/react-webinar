import { Link, NavLink } from "react-router-dom";
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
        Aggiungi
      </NavLink>
    </div>
  );
};

export default Header;
