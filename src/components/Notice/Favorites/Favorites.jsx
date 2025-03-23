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

  const handleRemoveFavorites = (id) => {
    dispatch(RemoveFromFavorites(id));
    dispatch(refreshUser());
  };

  return (
    <>
      {favoritesNotices && favoritesNotices.length > 0 ? (
        <NoticeList
          items={favoritesNotices}
          onRemove={handleRemoveFavorites}
          className={css.noticeList}
        />
      ) : (
        <NoItemsText />
      )}
    </>
  );
}
