import { Icons } from "../../../Icons/Icons";
import css from "./RadioBtnSort.module.css";

export default function RadioBtnSort({ field, form, onChange }) {
  const handleClick = (e) => {
    const chosenValue = e.currentTarget.dataset.value;
    form.setFieldValue(field.name, chosenValue);
    onChange(chosenValue);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    form.setFieldValue(field.name, null);
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
              field.value === option.value
                ? { backgroundColor: "#f6b83d", color: "white" }
                : {}
            }
          >
            <p>{option.label}</p>
            {field.value === option.value && (
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
