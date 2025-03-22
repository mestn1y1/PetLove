import { useState } from "react";
import { toast } from "react-toastify";
import { Icons } from "../../Icons/Icons";
import css from "./SearchField.module.css";

export default function SearchField({
  onSearch,
  onCancel,
  isDisabled,
  className,
  classNameInput,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.warning("You can't put an empty field");
      return;
    }
    onSearch(inputValue);
  };

  const handleCancelSearch = () => {
    setInputValue("");
    onCancel();
  };

  return (
    <div className={`${css.fieldWrap} ${className || ""}`}>
      <input
        type="text"
        className={`${css.searchFieldInput} ${classNameInput || ""}`}
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isDisabled}
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
      <button
        className={css.searchFieldBtnSearch}
        type="submit"
        onClick={handleSubmit}
      >
        <Icons iconName="search" className={css.searchFieldIcons} />
      </button>
    </div>
  );
}
