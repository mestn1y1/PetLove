import Avatar from "../../Form/AddPetForm/Avatar/Avatar";
import css from "./UserBlock.module.css";
import { useAuth } from "../../../hooks/useAuth";
export default function UserBlock() {
  const {
    user: { name, email, phone, avatar },
  } = useAuth();
  return (
    <div>
      <Avatar
        iconName="userY"
        imgUrl={avatar}
        className={css.avatarIcon}
        iconClassName={css.avatarIconUser}
      />
      {!avatar && <button className={css.openModalButton}>Upload photo</button>}
      <h2 className={css.title}>My information</h2>
      <ul className={css.userInfoList}>
        <li>
          <input
            className={css.userInfoItem}
            type="text"
            value={name.charAt(0).toUpperCase() + name.slice(1)}
            readOnly
          />
        </li>
        <li>
          <input
            className={css.userInfoItem}
            type="email"
            value={email}
            readOnly
          />
        </li>
        <li>
          <input
            className={`${css.userInfoItem} ${!phone ? css.emptyField : ""}`}
            type="text"
            value={phone}
            readOnly
            placeholder="+380"
          />
        </li>
      </ul>
    </div>
  );
}
