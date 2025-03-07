import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav({ className = "" }) {
  return (
    <ul className={`${css.authNavList} ${className}`.trim()}>
      <li className={css.authNavListItem}>
        <NavLink>LOG IN</NavLink>
      </li>
      <li className={css.authNavListItem}>
        <NavLink>REGISTRATION</NavLink>
      </li>
    </ul>
  );
}
