import css from "./Viewed.module.css";
import NoticeList from "../NoticesList/NoticesList";
import { useAuth } from "../../../hooks/useAuth";
import NoItemsText from "../NoItemsText/NoItemsText";

export default function Viewed() {
  const { viewedNotices } = useAuth();

  return (
    <>
      {viewedNotices && viewedNotices.length > 0 ? (
        <NoticeList items={viewedNotices} className={css.noticeList} />
      ) : (
        <NoItemsText />
      )}
    </>
  );
}
