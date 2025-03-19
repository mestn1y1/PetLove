import NoticesItem from "../NoticesItem/NoticesItem";
import css from "./NoticesList.module.css";
export default function NoticesList({ items }) {
  return (
    <ul className={css.noticesList}>
      {items.map((item) => (
        <li className={css.noticesItem} key={item._id}>
          <NoticesItem item={item} />
        </li>
      ))}
    </ul>
  );
}
