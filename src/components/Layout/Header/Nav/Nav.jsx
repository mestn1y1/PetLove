import { useState } from "react";
import { Icons } from "../../../Icons/Icons";
import { useLocation, NavLink } from "react-router-dom";
import css from "./Nav.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";

const navLinks = [
  { to: "/news", label: "News" },
  { to: "/notices", label: "Find Pet" },
  { to: "/friends", label: "Our Friends" },
];

export default function Nav() {
  const auth = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <ul className={css.navListDesc}>
        {navLinks.map(({ to, label }) => (
          <li
            key={to}
            className={isHome ? css.navListItem : css.navListItemHeader}
          >
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>

      <button className={css.buttonMenu} onClick={toggleMenu}>
        <Icons
          iconName="menu"
          className={`${css.burgerIcon} ${
            isHome ? css.burgerIconWhite : css.burgerIconBlack
          }`}
        />
      </button>

      <div
        className={`${css.burgerMenu} ${isMenuOpen ? css.open : ""} ${
          !isHome ? css.burgerMenuOrange : ""
        }`}
      >
        <button onClick={toggleMenu} className={css.button}>
          <Icons
            iconName="close"
            className={`${css.iconClose} ${!isHome ? css.iconCloseWight : ""}`}
          />
        </button>

        <ul className={css.navList}>
          {navLinks.map(({ to, label }) => (
            <li
              key={to}
              className={`${css.navListItem} ${
                !isHome ? css.navListItemWhite : ""
              }`}
            >
              <NavLink to={to} onClick={toggleMenu}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <AuthNav
          onClick={toggleMenu}
          isHome={isHome}
          className="block lg:hidden"
        />
      </div>

      <div className={`hidden lg:flex ${css.navWrapper}`}>
        {auth ? <UserNav /> : <AuthNav className="block lg:block" />}
      </div>
    </nav>
  );
}
