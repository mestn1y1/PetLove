import css from "./NoticesPage.module.css";
import Title from "../../components/Title/Title";
import NoticesFilters from "../../components/Notice/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/Notice/NoticesList/NoticesList";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { fetchNotices } from "../../redux/notices/filtration";
import { useNotices } from "../../hooks/useNotices";
import LoaderCustom from "../../components/LoaderCustom/LoaderCustom";
import { useAuth } from "../../hooks/useAuth";
import { ModalWrap } from "../../components/Modals/ModalWrap/ModalWrap";
import ModalCongrats from "../../components/Modals/ModalCongrats/ModalCongrats";
export default function NoticesPage() {
  const dispatch = useDispatch();
  const { notices, totalPagesNotices, isLoadNotices } = useNotices();
  const { favoritesNotices } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [congratsModalOpen, setCongratsModalOpen] = useState(false);
  const prevFavoritesLength = useRef(0);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    gender: "",
    type: "",
    location: "",
    sort: "",
  });

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      if (prevFavoritesLength.current < favoritesNotices.length) {
        setCongratsModalOpen(true);
      }
    } else {
      isMounted.current = true;
    }

    prevFavoritesLength.current = favoritesNotices.length;
  }, [favoritesNotices.length]);

  const closeCongratsModal = () => setCongratsModalOpen(false);

  const handleFilterChange = (newFilters) => {
    console.log("New filters:", newFilters);
    setFilters(newFilters);
    setCurrentPage(1);
  };

  useEffect(() => {
    const queryParams = {
      page: currentPage,
      keyword: filters.search,
      category: filters.category,
      species: filters.type,
      locationId: filters.location,
      sex: filters.gender,
      byPrice:
        filters.sort === "cheap"
          ? true
          : filters.sort === "expensive"
          ? false
          : undefined,
      byPopularity:
        filters.sort === "popular"
          ? false
          : filters.sort === "unpopular"
          ? true
          : undefined,
    };

    dispatch(fetchNotices(queryParams));
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
        {congratsModalOpen && (
          <ModalWrap
            isOpen={congratsModalOpen}
            handleClose={closeCongratsModal}
          >
            <ModalCongrats closeModal={closeCongratsModal} />
          </ModalWrap>
        )}
      </section>
    </>
  );
}
