import { useFriends } from "../../../hooks/useFriends";
import LoaderCustom from "../../LoaderCustom/LoaderCustom";
import FriendsItem from "../FriendsItem/FriendsItem";
import css from "./FriendsList.module.css";

export default function FriendsList() {
  const { friends, isLoadFriends } = useFriends();
  return (
    <>
      {isLoadFriends && <LoaderCustom />}
      <ul className={css.friendsList}>
        {friends.map((friendsItem) => (
          <li key={friendsItem._id} className={css.friendsItem}>
            <FriendsItem friendsItem={friendsItem} />
          </li>
        ))}
      </ul>
    </>
  );
}
