import { useState } from "react";
import { Icons } from "../../../Icons/Icons";
import { useLocation } from "react-router-dom";
import UserNav from "../UserNav/UserNav";
import css from "./Nav.module.css";
import AuthNav from "../AuthNav/AuthNav";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div>
        <button className={css.buttonMenu} onClick={toggleMenu}>
          <Icons
            iconName="menu"
            className={`${css.burgerIcon} ${
              isHome ? css.burgerIconWhite : css.burgerIconBlack
            }`}
          />
        </button>

        <div className={`${css.burgerMenu} ${isMenuOpen ? css.open : ""}`}>
          <button onClick={toggleMenu} className={css.button}>
            <Icons iconName="close" className={css.iconClose} />
          </button>
          <UserNav onClick={toggleMenu} />
          <AuthNav onClick={toggleMenu} className="block lg:hidden" />
        </div>
      </div>

      <div className={`hidden lg:flex ${css.navWrapper}`}>
        <UserNav />
        <AuthNav className="block lg:block" />
      </div>
    </nav>
  );
}
