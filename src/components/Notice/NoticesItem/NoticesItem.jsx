import { Icons } from "../../Icons/Icons";
import { Button } from "../../Button/Button";
import css from "./NoticesItem.module.css";
import { formatDate } from "../../../helpers/formaterDate";
import { useState } from "react";
import { ModalWrap } from "../../Modals/ModalWrap/ModalWrap";
import ModalNotice from "../../Modals/ModalNotice/ModalNotice";
export default function NoticesItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(item);
  const {
    birthday,
    category,
    comment,
    popularity,
    imgURL,
    price,
    name,
    sex,
    species,
    title,
  } = item;
  return (
    <div>
      <img src={imgURL} alt="avatar" className={css.itemImg} />
      <div className={css.itemTitleWrap}>
        <h2 className={css.itemTitle}>{title}</h2>
        <p className={css.itemPopularity}>
          <Icons iconName="star" className={css.itemIconStar} />
          {Math.floor(popularity / 1000)}
        </p>
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
        <li className={css.itemDetailItem}>
          <p className={css.itemDetailItemText}>Category</p>
          <span className={css.itemDetailItemSpan}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </li>
      </ul>
      <p className={css.itemComent}>{comment}</p>
      <p className={css.itemPrice}>
        ${price ? (price + 0.99).toFixed(2) : "0.00"}
      </p>
      <div className={css.btnWrap}>
        <Button
          text="Learn more"
          type="button"
          onClick={openModal}
          className={css.btnMore}
        />
        <button className={css.btnFavorite}>
          <Icons iconName="heart-stroke" className={css.iconHeartStroke} />
        </button>
      </div>
      {isModalOpen && (
        <ModalWrap isOpen={isModalOpen} handleClose={closeModal}>
          <ModalNotice item={item} handleClose={closeModal} />
        </ModalWrap>
      )}
    </div>
  );
}
