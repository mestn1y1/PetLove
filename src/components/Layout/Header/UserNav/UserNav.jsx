import { NavLink } from "react-router-dom";
import css from "./UserNav.module.css";

export default function UserNav({ className = "" }) {
  return (
    <ul className={`${css.navList} ${className}`.trim()}>
      <li className={css.navListItem}>
        <NavLink to="/news">News</NavLink>
      </li>
      <li className={css.navListItem}>
        <NavLink to="/find-pet">Find Pet</NavLink>
      </li>
      <li className={css.navListItem}>
        <NavLink to="/our-friends">Our Friends</NavLink>
      </li>
    </ul>
  );
}
