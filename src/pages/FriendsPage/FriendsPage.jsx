import ModalAttention from "../../components/Modals/ModalAttention/ModalAttention";
import { ModalWrap } from "../../components/Modals/ModalWrap/ModalWrap";
import Title from "../../components/Title/Title";
import { useEffect, useState } from "react";
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
