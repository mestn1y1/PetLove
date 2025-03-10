import { useState } from "react";
import { ModalWrap } from "../Modals/ModalWrap/ModalWrap";
import { Button } from "../Button/Button";
import ModalApproveAction from "../Modals/ModalApproveAction/ModalApproveAction";
import css from "./LogOutBtn.module.css";

export default function LogOutBtn({ isHome }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button
        text="Log out"
        onClick={openModal}
        className={`${css.btnLogOut} ${isHome ? css.hidden : ""}`}
      />
      {isModalOpen && (
        <ModalWrap
          isOpen={isModalOpen}
          handleClose={closeModal}
          ariaHideApp={false}
        >
          <ModalApproveAction handleClose={closeModal} />
        </ModalWrap>
      )}
    </>
  );
}
