import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav({ className = "" }) {
  return (
    <ul className={`${css.authNavList} ${className}`.trim()}>
      <li>
        <NavLink>LOG IN</NavLink>
      </li>
      <li>
        <NavLink>REGISTRATION</NavLink>
      </li>
    </ul>
  );
}
