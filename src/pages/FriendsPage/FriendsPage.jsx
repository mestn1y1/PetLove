import Title from "../../components/Title/Title";
import { useEffect } from "react";
import FriendsList from "../../components/Friends/FriendsList/FriendsList";
import css from "./FriendsPage.module.css";
import { useDispatch } from "react-redux";
import { fetchFriends } from "../../redux/friends/operations";

export default function FriendsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);
  return (
    <section className={css.friendsPage}>
      <Title text="Our friends" />
      <FriendsList />
    </section>
  );
}
