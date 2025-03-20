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
  };

  useEffect(() => {
    dispatch(fetchNotices({ page: currentPage, filters }));
  }, [filters, dispatch, currentPage]);

  return (
    <>
      {isLoadNotices && <LoaderCustom />}
      <section className={css.noticePages}>
        <Title text="Find your favorite pet" />
        <NoticesFilters onFilterChange={handleFilterChange} />
        <NoticesList items={notices} />
        <Pagination
          totalPages={totalPagesNotices}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
}
