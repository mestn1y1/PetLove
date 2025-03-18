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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Title text="Our friends" />
      <button onClick={openModal}>Open Modal</button>

      <ModalWrap isOpen={isModalOpen} handleClose={closeModal}>
        <ModalAttention handleClose={closeModal} />
      </ModalWrap>
      <FriendsList />
    </div>
  );
}
