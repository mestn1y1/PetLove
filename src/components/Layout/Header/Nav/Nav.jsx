import { Icons } from "../../../Icons/Icons";
import { NavLink, useLocation } from "react-router-dom";
import UserNav from "../UserNav/UserNav";
import css from "./Nav.module.css";

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <nav>
      <button className="lg:hidden">
        <Icons
          iconName="menu"
          className={`${css.burgerIcon} ${
            isHome ? css.burgerIconWhite : css.burgerIconBlack
          }`}
        />
      </button>
      <ul className={`${css.navList} hidden lg:flex`}>
        <li className={css.navListItem}>
          <NavLink>News</NavLink>
        </li>
        <li className={css.navListItem}>
          <NavLink>Find Pet</NavLink>
        </li>
        <li className={css.navListItem}>
          <NavLink>Our Friends</NavLink>
        </li>
        <li>
          <UserNav />
        </li>
      </ul>
    </nav>
  );
}
