import { Link } from "react-router-dom";
import { Icons } from "../../../Icons/Icons";
import css from "./Logo.module.css";
import { useLocation } from "react-router-dom";

export default function Logo() {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  return (
    <Link
      to="/home"
      className={`${css.logoText} ${isHome ? css.logoTextWhite : ""}`}
    >
      petl
      <Icons
        iconName={isHome ? "heartWhite" : "heart1"}
        className={css.logoIcon}
      />
      ve
    </Link>
  );
}
