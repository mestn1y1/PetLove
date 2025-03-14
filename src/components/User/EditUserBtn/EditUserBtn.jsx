import { Button } from "../../Button/Button";
import { Icons } from "../../Icons/Icons";
import ModalEditUser from "../../Modals/ModalEditUser/ModalEditUser";
import { ModalWrap } from "../../Modals/ModalWrap/ModalWrap";
import css from "./EditUserBtn.module.css";
import { useState } from "react";
export default function EditUserBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button className={css.editBtn} onClick={openModal}>
        <Icons iconName="edit" className={css.icon} />
      </Button>
      {isModalOpen && (
        <ModalWrap
          isOpen={isModalOpen}
          handleClose={closeModal}
          ariaHideApp={false}
        >
          <ModalEditUser handleClose={closeModal} />
        </ModalWrap>
      )}
    </>
  );
}
