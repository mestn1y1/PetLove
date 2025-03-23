import { useState } from "react";
import { Icons } from "../../../Icons/Icons";
import css from "./RadioBtnSort.module.css";

export default function RadioBtnSort({ onChange }) {
  const [radioSearch, setRadioSearch] = useState(null);

  const handleClick = (e) => {
    const choosenValue = e.currentTarget.dataset.value;
    setRadioSearch(choosenValue);
    onChange(choosenValue);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setRadioSearch(null);
    onChange(null);
  };

  const sortOptions = [
    { value: "popular", label: "Popular" },
    { value: "unpopular", label: "Unpopular" },
    { value: "expensive", label: "Expensive" },
    { value: "cheap", label: "Cheap" },
  ];

  return (
    <div className={css.radioBtnSort}>
      <hr className={css.horizontLine} />
      <ul className={css.radioBtnSortOptions}>
        {sortOptions.map((option) => (
          <li
            key={option.value}
            data-value={option.value}
            onClick={handleClick}
            className={css.radioBtnSortLabel}
            style={
              radioSearch === option.value
                ? { backgroundColor: "#f6b83d", color: "white" }
                : {}
            }
          >
            <p>{option.label}</p>
            {radioSearch === option.value && (
              <button type="button" onClick={handleCancel}>
                <Icons iconName="close" className={css.clearIcon} />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
