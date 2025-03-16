import Avatar from "../../Form/AddPetForm/Avatar/Avatar";
import css from "./UserBlock.module.css";
import { useAuth } from "../../../hooks/useAuth";

export default function UserBlock() {
  const { user } = useAuth();

  return (
    <div>
      <Avatar
        iconName="userY"
        imgUrl={user.avatar}
        className={css.avatarIcon}
        iconClassName={css.avatarIconUser}
      />
      {!user.avatar && (
        <button className={css.openModalButton}>Upload photo</button>
      )}
      <h2 className={css.title}>My information</h2>
      <ul className={css.userInfoList}>
        <li>
          <p className={css.userInfoItem}>
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          </p>
        </li>
        <li>
          <p className={css.userInfoItem}>{user.email}</p>
        </li>
        <li>
          <p
            className={`${css.userInfoItem} ${
              !user.phone ? css.emptyField : ""
            }`}
          >
            {user?.phone || "+38"}
          </p>
        </li>
      </ul>
    </div>
  );
}
