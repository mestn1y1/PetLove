import { Icons } from "../../Icons/Icons";
import css from "./ModalNotice.module.css";
export default function ModalNotice({ item, handleClose }) {
  const {
    imgURL,
    title,
    name,
    birthday,
    sex,
    species,
    comment,
    price,
    category,
  } = item;
  return (
    <div className={css.modalWrap}>
      <button className={css.closeBtn} onClick={handleClose}>
        <Icons iconName="close" className={css.iconBtn} />
      </button>
      <div className={css.imgWrap}>
        <img src={imgURL} alt="avatar" className={css.img} />
        <p className={css.beidge}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
      </div>
      <h2 className={css.title}>{title}</h2>
    </div>
  );
}
