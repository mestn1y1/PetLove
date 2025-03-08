import { NavLink } from "react-router-dom";
import css from "./UserNav.module.css";

export default function UserNav({ className = "", onClick }) {
  return (
    <ul className={`${css.navList} ${className}`.trim()}>
      <li className={css.navListItem}>
        <NavLink to="/news" onClick={onClick}>
          News
        </NavLink>
      </li>
      <li className={css.navListItem}>
        <NavLink to="/find-pet" onClick={onClick}>
          Find Pet
        </NavLink>
      </li>
      <li className={css.navListItem}>
        <NavLink to="/our-friends" onClick={onClick}>
          Our Friends
        </NavLink>
      </li>
    </ul>
  );
}
