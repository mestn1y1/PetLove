import css from "./NoticesPage.module.css";
import Title from "../../components/Title/Title";
import NoticesFilters from "../../components/Notice/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/Notice/NoticesList/NoticesList";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchNotices } from "../../redux/notices/filtration";
import { useNotices } from "../../hooks/useNotices";
import LoaderCustom from "../../components/LoaderCustom/LoaderCustom";
export default function NoticesPage() {
  const dispatch = useDispatch();
  const { notices, totalPagesNotices, isLoadNotices } = useNotices();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    gender: "",
    type: "",
    location: "",
    sort: "popular",
  });
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        keyword: filters.search,
        category: filters.category,
        species: filters.type,
        locationId: filters.location,
        radioSearch: filters.sort,
        sex: filters.gender,
      })
    );
  }, [filters, dispatch, currentPage]);

  return (
    <>
      {isLoadNotices && <LoaderCustom />}
      <section className={css.noticePages}>
        <Title text="Find your favorite pet" />
        <NoticesFilters onFilterChange={handleFilterChange} />
        {notices.length > 0 ? (
          <NoticesList items={notices} />
        ) : (
          <p className={css.textNotFound}>
            Sorry, <b>no find</b> any notice for these search parameters!
          </p>
        )}
        <Pagination
          totalPages={totalPagesNotices}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
}
