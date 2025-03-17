import SearchField from "../../components/News/SearchField/SearchField";
import Title from "../../components/Title/Title";
import NewsList from "../../components/News/NewsList/NewsList";
import css from "./NewsPage.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchNews } from "../../redux/news/operations";
export default function NewsPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!searchValue || searchValue === "") {
      dispatch(fetchNews({ page: currentPage, searchQuery: null }));
    } else {
      dispatch(fetchNews({ page: currentPage, searchQuery: searchValue }));
    }
  }, [currentPage, dispatch, searchValue]);

  return (
    <>
      <div className={css.wrapBlock}>
        <Title text="News" />
        <SearchField
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <NewsList setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}
