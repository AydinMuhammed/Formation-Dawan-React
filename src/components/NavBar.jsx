import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home-Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}