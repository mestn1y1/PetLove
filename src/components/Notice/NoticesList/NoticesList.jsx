import NoticesItem from "../NoticesItem/NoticesItem";
import css from "./NoticesList.module.css";
export default function NoticesList({ items, onRemove, className }) {
  return (
    <ul className={`${css.noticesList} ${className || ""}`}>
      {items.map((item) => (
        <li className={css.noticesItem} key={item._id}>
          <NoticesItem item={item} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  );
}
