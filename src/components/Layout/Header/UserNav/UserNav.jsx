import UserBar from "../../../User/UserBar/UserBar";
import LogOutBtn from "../../../LogOutBtn/LogOutBtn";
import css from "./UserNav.module.css";

export default function UserNav({ isHome }) {
  return (
    <div className={css.wrapUserNav}>
      <LogOutBtn isHome={isHome} />
      <UserBar isHome={isHome} />
    </div>
  );
}
