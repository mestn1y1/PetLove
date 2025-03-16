import EditUserBtn from "../EditUserBtn/EditUserBtn";
import UserBlock from "../UserBlock/UserBlock";
import PetsBlock from "../../Pet/PetsBlock/PetsBlock";
import css from "./UserCard.module.css";
import LogOutBtn from "../../LogOutBtn/LogOutBtn";
import { useState } from "react";

import { Icons } from "../../Icons/Icons";
export default function UserCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={css.containerUserCard}>
      <div className={css.wrapUserPanel}>
        <div className={css.userBadge}>
          <p className={css.userName}>User</p>
          <Icons iconName="userW" className={css.userIcon} />
        </div>
        <EditUserBtn
          openModal={openModal}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      </div>
      <UserBlock openModal={openModal} />
      <PetsBlock />
      <LogOutBtn btnClassName={css.btnClassName} />
    </div>
  );
}
