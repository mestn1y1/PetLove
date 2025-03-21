import css from "./MyNotices.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function MyNotices() {
  return (
    <>
      <nav className={css.tabs}>
        <NavLink
          to="favorites"
          className={({ isActive }) => (isActive ? css.activeTab : css.tab)}
        >
          My favorite pets
        </NavLink>
        <NavLink
          to="viewed"
          className={({ isActive }) => (isActive ? css.activeTab : css.tab)}
        >
          Viewed
        </NavLink>
      </nav>

      <div className={css.content}>
        <Outlet />
      </div>
    </>
  );
}
