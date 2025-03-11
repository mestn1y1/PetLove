import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // для редиректу на Home page
import { logOut } from "../../redux/auth/operations";
import { ModalWrap } from "../Modals/ModalWrap/ModalWrap";
import { Button } from "../Button/Button";
import ModalApproveAction from "../Modals/ModalApproveAction/ModalApproveAction";
import css from "./LogOutBtn.module.css";

export default function LogOutBtn({ isHome }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogout = async () => {
    try {
      await dispatch(logOut());

      navigate("/home");
    } catch (error) {}
    closeModal();
  };

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
          <ModalApproveAction
            handleClose={closeModal}
            handleLogout={handleLogout}
          />
        </ModalWrap>
      )}
    </>
  );
}
