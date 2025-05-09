import { Button } from "../../Button/Button";
import { Icons } from "../../Icons/Icons";
import { useNavigate } from "react-router-dom";
import css from "./ModalCongrats.module.css";

export default function ModalCongrats({ closeModal }) {
  const navigate = useNavigate();
  const handleRedirect = () => {
    closeModal();
    navigate("/profile");
  };
  return (
    <div className={css.modalWrap}>
      <button className={css.closeBtn} onClick={closeModal}>
        <Icons iconName="close" className={css.closeIcon} />
      </button>
      <div className={css.imgWrap}>
        <img src="/images/cat_mod.png" alt="cat" className={css.img} />
      </div>
      <h2 className={css.title}>Congrats</h2>
      <p className={css.text}>
        The first fluff in the favorites! May your friendship be the happiest
        and filled with fun.
      </p>
      <Button
        type="button"
        text="Go to profile"
        onClick={handleRedirect}
        className={css.btnRedirect}
      />
    </div>
  );
}
