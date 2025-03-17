import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { fetchNews } from "../../../redux/news/operations";
import { Icons } from "../../Icons/Icons";
import css from "./SearchField.module.css";

export default function SearchField({
  setSearchValue,
  setCurrentPage,
  searchValue,
}) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.warning("You can't put an empty field");
      return;
    }
    setSearchValue(inputValue);
    setCurrentPage(1);
  };

  const handleCancelSearch = async () => {
    setInputValue("");
    setSearchValue("");
    setCurrentPage(1);
    await dispatch(fetchNews({ page: 1, searchQuery: null }));
  };

  return (
    <form className={css.fieldWrap} onSubmit={handleSubmit}>
      <input
        type="text"
        className={css.searchFieldInput}
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={searchValue !== ""}
      />
      {inputValue && (
        <button
          className={css.searchFieldBtnClose}
          type="button"
          onClick={handleCancelSearch}
        >
          <Icons iconName="close" className={css.searchFieldClose} />
        </button>
      )}
      <button className={css.searchFieldBtnSearch} type="submit">
        <Icons iconName="search" className={css.searchFieldIcons} />
      </button>
    </form>
  );
}
