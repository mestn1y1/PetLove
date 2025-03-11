import ModalAttention from "../../components/Modals/ModalAttention/ModalAttention";
import { ModalWrap } from "../../components/Modals/ModalWrap/ModalWrap";
import Title from "../../components/Title/Title";
import { useState } from "react";
import css from "./FriendsPage.module.css";

export default function FriendsPage() {
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
    </div>
  );
}
