import { useState, useEffect, useRef } from "react";
import { Icons } from "../../../Icons/Icons";
import { useLocation, NavLink } from "react-router-dom";
import css from "./Nav.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import { useAuth } from "../../../../hooks/useAuth";
import classNames from "classnames";

const navLinks = [
  { to: "/news", label: "News" },
  { to: "/notices", label: "Find Pet" },
  { to: "/friends", label: "Our Friends" },
];

export default function Nav() {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className={css.nav}>
      <ul className={css.navListDesc}>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={classNames({
                [css.navListItem]: isHome,
                [css.navListItemHeader]: !isHome,
                [css.active]: !isHome && location.pathname === to, // Добавляем активный класс, если путь совпадает
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {isLoggedIn ? (
        <UserNav isHome={isHome} />
      ) : (
        <div
          className={`hidden md:flex ${
            isHome ? css.hideOnHome : css.showOnOtherPages
          }`}
        >
          <AuthNav isHome={isHome} className="block lg:block" />
        </div>
      )}
      <button className={css.buttonMenu} onClick={toggleMenu}>
        <Icons
          iconName="menu"
          className={`${css.burgerIcon} ${
            isHome ? css.burgerIconWhite : css.burgerIconBlack
          }`}
        />
      </button>

      <div
        ref={menuRef}
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
    </nav>
  );
}
