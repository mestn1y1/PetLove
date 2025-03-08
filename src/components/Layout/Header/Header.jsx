import css from "./Header.module.css";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";

  return (
    <header className={isHome ? css.headerHome : css.header}>
      <Logo className={css.logo} />
      <Nav />
    </header>
  );
}
