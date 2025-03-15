import EditUserBtn from "../EditUserBtn/EditUserBtn";
import UserBlock from "../UserBlock/UserBlock";
import PetsBlock from "../../Pet/PetsBlock/PetsBlock";
import css from "./UserCard.module.css";
import LogOutBtn from "../../LogOutBtn/LogOutBtn";

import { Icons } from "../../Icons/Icons";
export default function UserCard() {
  return (
    <div className={css.containerUserCard}>
      <div className={css.wrapUserPanel}>
        <div className={css.userBadge}>
          <p className={css.userName}>User</p>
          <Icons iconName="userW" className={css.userIcon} />
        </div>
        <EditUserBtn />
      </div>
      <UserBlock />
      <PetsBlock />
      <LogOutBtn btnClassName={css.btnClassName} />
    </div>
  );
}
