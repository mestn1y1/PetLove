import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import css from "./UserBar.module.css";
import { useAuth } from "../../../hooks/useAuth";

export default function UserBar({ isHome }) {
  const {
    user: { avatar, name },
  } = useAuth();
  return (
    <div className={css.wrapUserBar}>
      <NavLink className={css.userLink} to="/profile">
        {avatar ? (
          <img src={avatar} className={css.userAvatar} />
        ) : (
          <FaUser className={css.userIcon} />
        )}
      </NavLink>
      <h2 className={`${css.userName} ${isHome ? css.userNameWhite : ""}`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </div>
  );
}
