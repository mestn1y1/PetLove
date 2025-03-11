import { Icons } from "../../Icons/Icons";
import { NavLink } from "react-router-dom";
import css from "./ModalAttention.module.css";
export default function ModalAttention({ handleClose }) {
  return (
    <div className={css.modalContainer}>
      <button className={css.bloseBtn} onClick={handleClose}>
        <Icons iconName="close" className={css.iconClose} />
      </button>
      <div className={css.imgWrap}>
        <img src="/images/dog_mod.png" alt="dog" className={css.imgDog} />
      </div>
      <h2 className={css.tittleAttention}>Attention</h2>
      <p className={css.description}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={css.authNav}>
        <NavLink to="/login" className={css.link}>
          Log In
        </NavLink>

        <NavLink to="/register" className={css.link}>
          Register
        </NavLink>
      </div>
    </div>
  );
}
