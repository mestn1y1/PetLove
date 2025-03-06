import { Link } from "react-router-dom";
import { Icons } from "../../../Icons/Icons";
import css from "./Logo.module.css";
import { useLocation } from "react-router-dom";

export default function Logo() {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  return (
    <Link
      to="/home"
      className={`${css.logoText} ${isHome ? css.logoTextWhite : ""}`}
    >
      petl
      <Icons
        iconName={isHome ? "heartWhite" : "heart"}
        className={css.logoIcon}
      />
      ve
    </Link>
  );
}
