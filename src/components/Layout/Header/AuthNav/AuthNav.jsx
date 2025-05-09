import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav({ className = "", onClick, isHome }) {
  return (
    <ul className={`${css.authNavList} ${className}`.trim()}>
      <li
        className={`${css.authNavListItem} ${
          !isHome ? css.authNavListItemOrange : ""
        }`}
      >
        <NavLink to="/login" onClick={onClick}>
          LOG IN
        </NavLink>
      </li>
      <li className={css.authNavListItem}>
        <NavLink to="/register" onClick={onClick}>
          REGISTRATION
        </NavLink>
      </li>
    </ul>
  );
}
