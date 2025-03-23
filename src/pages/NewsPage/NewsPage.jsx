
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/news/operations";
import { selectIsLoadingNews } from "../../redux/news/selectors";

import SearchField from "../../components/News/SearchField/SearchField";
import Title from "../../components/Title/Title";
import NewsList from "../../components/News/NewsList/NewsList";
import LoaderCustom from "../../components/LoaderCustom/LoaderCustom";

import css from "./NewsPage.module.css";

export default function NewsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoadingNews);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(
      fetchNews({ page: currentPage, searchQuery: searchValue || null })
    );
  }, [currentPage, dispatch, searchValue]);

  const handleSearch = (query) => {
    setSearchValue(query);
    setCurrentPage(1);
  };

  const handleCancel = () => {
    setSearchValue("");
    setCurrentPage(1);
  };

  return (
    <>
      {loading && <LoaderCustom />}
      <div className={css.wrapBlock}>
        <Title text="News" />
        <SearchField
          onSearch={handleSearch}
          onCancel={handleCancel}
          isDisabled={!!searchValue}
        />
      </div>
      <NewsList setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}
