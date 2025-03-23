import { Icons } from "../../Icons/Icons";
import { Button } from "../../Button/Button";
import css from "./NoticesItem.module.css";
import { formatDate } from "../../../helpers/formaterDate";
import { useState, useEffect } from "react";
import { ModalWrap } from "../../Modals/ModalWrap/ModalWrap";
import ModalNotice from "../../Modals/ModalNotice/ModalNotice";
import ModalAtention from "../../Modals/ModalAttention/ModalAttention";
import { useAuth } from "../../../hooks/useAuth";
import {
  AddToFavorites,
  RemoveFromFavorites,
} from "../../../redux/notices/operations";
import { refreshUser, viewedPet } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function NoticesItem({ item, onRemove }) {
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
    _id,
  } = item;
  const dispatch = useDispatch();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isLoggedIn, favoritesNotices } = useAuth();
  const isViewed = location.pathname === "/profile/viewed";
  const [isFavorite, setIsFavorite] = useState(
    favoritesNotices.some((favItem) => favItem._id === _id)
  );

  useEffect(() => {
    setIsFavorite(favoritesNotices.some((favItem) => favItem._id === _id));
  }, [favoritesNotices, _id]);

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      openAuthModal();
      return;
    }

    if (isFavorite) {
      dispatch(RemoveFromFavorites(_id));
      setIsFavorite(false);
      if (onRemove) {
        onRemove(_id);
      }
    } else {
      dispatch(AddToFavorites(_id));
      setIsFavorite(true);
    }
    dispatch(refreshUser());
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  const openModal = () => {
    dispatch(viewedPet(_id));
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <img src={imgURL} alt="avatar" className={css.itemImg} />
      <div className={css.itemTitleWrap}>
        <h2 className={css.itemTitle}>{title}</h2>
        <p className={css.itemPopularity}>
          <Icons iconName="star" className={css.itemIconStar} />
          {popularity}
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
          onClick={(e) => {
            if (!isLoggedIn) {
              e.preventDefault();
              openAuthModal();
            } else {
              openModal();
            }
          }}
          className={`${css.btnMore} ${isViewed ? css.fullWidth : ""}`}
        />
        {!isViewed && (
          <button className={css.btnFavorite} onClick={handleFavoriteClick}>
            {isFavorite ? (
              <Icons iconName="trash" className={css.iconHeartStroke} />
            ) : (
              <Icons iconName="heart-stroke" className={css.iconHeartStroke} />
            )}
          </button>
        )}
      </div>
      {isModalOpen && (
        <ModalWrap isOpen={isModalOpen} handleClose={closeModal}>
          <ModalNotice
            item={item}
            handleClose={closeModal}
            isFavorite={isFavorite}
            handleFavoriteClick={handleFavoriteClick}
          />
        </ModalWrap>
      )}
      {isAuthModalOpen && (
        <ModalWrap isOpen={isAuthModalOpen} handleClose={closeAuthModal}>
          <ModalAtention handleClose={closeAuthModal} />
        </ModalWrap>
      )}
    </div>
  );
}
