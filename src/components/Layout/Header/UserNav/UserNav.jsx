import { NavLink, useLocation } from "react-router-dom";
import css from "./UserNav.module.css";

export default function UserNav({ className = "", onClick }) {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  return (
    <ul className={`${css.navList} ${className}`.trim()}>
      <li className={isHome ? css.navListItem : css.navListItemHeader}>
        <NavLink to="/news" onClick={onClick}>
          News
        </NavLink>
      </li>
      <li className={isHome ? css.navListItem : css.navListItemHeader}>
        <NavLink to="/find-pet" onClick={onClick}>
          Find Pet
        </NavLink>
      </li>
      <li className={isHome ? css.navListItem : css.navListItemHeader}>
        <NavLink to="/our-friends" onClick={onClick}>
          Our Friends
        </NavLink>
      </li>
    </ul>
  );
}
