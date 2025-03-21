import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../../redux/auth/operations";
import { RemoveFromFavorites } from "../../../redux/notices/operations";
import { useAuth } from "../../../hooks/useAuth";
import NoticeList from "../NoticesList/NoticesList";
import NoItemsText from "../NoItemsText/NoItemsText";
import css from "./Favorites.module.css";

export default function Favorites() {
  const { favoritesNotices } = useAuth();
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState(favoritesNotices);
  const prevFavoritesLength = useRef(favoritesNotices?.length);

  useEffect(() => {
    setFavorites(favoritesNotices);
    if (prevFavoritesLength.current !== favoritesNotices?.length) {
      dispatch(refreshUser());
    }
    prevFavoritesLength.current = favoritesNotices?.length;
  }, [favoritesNotices, dispatch]);

  const handleRemoveFavorites = (id) => {
    dispatch(RemoveFromFavorites(id));
    setFavorites((prev) => prev.filter((fav) => fav._id !== id));
  };

  return (
    <>
      {favorites.length > 0 ? (
        <NoticeList
          items={favorites}
          onRemove={handleRemoveFavorites}
          className={css.noticeList}
        />
      ) : (
        <NoItemsText />
      )}
    </>
  );
}
