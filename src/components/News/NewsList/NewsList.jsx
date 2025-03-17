import css from "./NewsList.module.css";
import { useNews } from "../../../hooks/useNews";
import NewsItem from "../NewsItem/NewsItem";
import Pagination from "../../Pagination/Pagination";

export default function NewsList({ setCurrentPage, currentPage }) {
  const { news, totalPages } = useNews();
  console.log(news);

  if (!news || news.length === 0) {
    return (
      <p className={css.NotResultsText}>
        Sorry, <b>no find</b> any news with these search parameters
      </p>
    );
  }

  return (
    <div className={css.wrapContainerForPagination}>
      <ul className={css.newsList}>
        {news.map((newsItem) => (
          <li key={newsItem.id} className={css.newsItem}>
            <NewsItem newsItem={newsItem} />
          </li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
