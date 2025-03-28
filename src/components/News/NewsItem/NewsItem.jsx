import { Link } from "react-router-dom";
import css from "./NewsItem.module.css";
import { formatDateWithSlash } from "../../../helpers/formaterDate";
export default function NewsItem({
  newsItem: { imgUrl, text, title, url, date },
}) {
  return (
    <>
      <img src={imgUrl} alt="Poster" className={css.newsItemImg} />
      <h2 className={css.newsItemTitle}>{title}</h2>
      <p className={css.newsItemText}>{text}</p>
      <div className={css.wrapContainer}>
        <p className={css.newsItemDate}>{formatDateWithSlash(date)}</p>
        <Link
          className={css.newsItemLink}
          to={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </Link>
      </div>
    </>
  );
}
