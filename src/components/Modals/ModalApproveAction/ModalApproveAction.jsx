import { Button } from "../../Button/Button";
import { Icons } from "../../Icons/Icons";
import css from "./ModalApproveAction.module.css";

export default function ModalApproveAction({ handleClose, handleLogout }) {
  return (
    <div className={css.modalContainer}>
      <button className={css.closeBtn} onClick={handleClose}>
        <Icons iconName="close" className={css.closeBtnIcon} />
      </button>
      <div className={css.imgWrap}>
        <img src="./images/cat_mod.png" alt="cat" className={css.img} />
      </div>
      <h2 className={css.title}>Already leaving?</h2>
      <div className={css.btnWrap}>
        <Button text="Yes" onClick={handleLogout} className={css.yesBtn} />
        <Button text="Cancel" onClick={handleClose} className={css.cancelBtn} />
      </div>
    </div>
  );
}
