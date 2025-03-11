import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import css from "./UserBar.module.css";
import { useAuth } from "../../../hooks/useAuth";

export default function UserBar({ isHome }) {
  const { user } = useAuth();
  return (
    <div className={css.wrapUserBar}>
      <NavLink className={css.userLink} to="/profile">
        {user.avatar ? (
          <img src={user.avatar} />
        ) : (
          <FaUser className={css.userIcon} />
        )}
      </NavLink>
      <h2 className={`${css.userName} ${isHome ? css.userNameWhite : ""}`}>
        {user.name}
      </h2>
    </div>
  );
}
