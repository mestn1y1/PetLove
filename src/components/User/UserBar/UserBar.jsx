import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import css from "./UserBar.module.css";

export default function UserBar() {
  return (
    <div className={css.wrapUserBar}>
      <NavLink className={css.userLink} to="/profile">
        <FaUser className={css.userIcon} />
      </NavLink>
      <h2 className={css.userName}>Name</h2>
    </div>
  );
}
