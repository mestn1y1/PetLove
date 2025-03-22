import { useState } from "react";
import css from "./RadioBtnSort.module.css";

export default function RadioBtnSort({ onChange }) {
  const [selectedValue, setSelectedValue] = useState("popular");

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  const sortOptions = [
    { value: "popular", label: "Popular" },
    { value: "unpopular", label: "Unpopular" },
    { value: "expensive", label: "Expensive" },
    { value: "cheap", label: "Cheap" },
  ];

  return (
    <div className={css.radioBtnSort}>
      <p className={css.radioBtnSortTitle}>Sort</p>
      <div className={css.radioBtnSortOptions}>
        {sortOptions.map((option) => (
          <label key={option.value} className={css.radioBtnSortLabel}>
            <input
              type="radio"
              name="sort"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleRadioChange}
              className={css.radioBtnSortInput}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
