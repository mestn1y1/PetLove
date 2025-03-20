import { Icons } from "../../Icons/Icons";
import css from "./ModalNotice.module.css";
import { formatDate } from "../../../helpers/formaterDate";

import RenderStars from "./RenderStars/RenderStars";
import { Button } from "../../Button/Button";
export default function ModalNotice({ item, handleClose }) {
  const isFavorite = false;
  const {
    imgURL,
    title,
    name,
    birthday,
    sex,
    species,
    comment,
    price,
    popularity,
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
      <div className={css.starsWrap}>
        <RenderStars popularity={popularity / 1000} />
        <p>{popularity}</p>
      </div>
      <ul className={css.itemDetailList}>
        <li className={css.itemDetailItem}>
          <p className={css.itemDetailItemText}>Name</p>
          <span className={css.itemDetailItemSpan}>{name}</span>
        </li>
        <li className={css.itemDetailItem}>
          <p className={css.itemDetailItemText}>Birthday</p>
          <span className={css.itemDetailItemSpan}>{formatDate(birthday)}</span>
        </li>
        <li className={css.itemDetailItem}>
          <p className={css.itemDetailItemText}>Sex</p>
          <span className={css.itemDetailItemSpan}>
            {sex.charAt(0).toUpperCase() + sex.slice(1)}
          </span>
        </li>
        <li className={css.itemDetailItem}>
          <p className={css.itemDetailItemText}>Species</p>
          <span className={css.itemDetailItemSpan}>
            {species.charAt(0).toUpperCase() + species.slice(1)}
          </span>
        </li>
      </ul>
      <p className={css.itemComent}>{comment}</p>
      <p className={css.itemPrice}>
        ${price ? (price + 0.99).toFixed(2) : "0.00"}
      </p>
      <div className={css.btnWrap}>
        <Button
          text={isFavorite ? "Remove from" : "Add to"}
          className={css.btnAddRemove}
        >
          <Icons iconName="heart-whiteStroke" className={css.iconHeart} />
        </Button>
        <a href="mailto:petLoveSupport@gmail.com" className={css.linkContact}>
          Contact
        </a>
      </div>
    </div>
  );
}
