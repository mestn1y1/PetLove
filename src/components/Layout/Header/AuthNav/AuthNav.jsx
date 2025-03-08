import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav({ className = "", onClick }) {
  return (
    <ul className={`${css.authNavList} ${className}`.trim()}>
      <li className={css.authNavListItem}>
        <NavLink onClick={onClick}>LOG IN</NavLink>
      </li>
      <li className={css.authNavListItem}>
        <NavLink onClick={onClick}>REGISTRATION</NavLink>
      </li>
    </ul>
  );
}
