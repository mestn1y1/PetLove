import css from "./Favorites.module.css";
import NoticeList from "../NoticesList/NoticesList";
import { useAuth } from "../../../hooks/useAuth";
import NoItemsText from "../NoItemsText/NoItemsText";

export default function Favorites() {
  const { favoritesNotices } = useAuth();

  return (
    <>
      {favoritesNotices && favoritesNotices.length > 0 ? (
        <NoticeList items={favoritesNotices} />
      ) : (
        <NoItemsText />
      )}
    </>
  );
}
