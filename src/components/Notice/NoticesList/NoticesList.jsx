import NoticesItem from "../NoticesItem/NoticesItem";
import css from "./NoticesList.module.css";
export default function NoticesList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          <NoticesItem item={item} />
        </li>
      ))}
    </ul>
  );
}
