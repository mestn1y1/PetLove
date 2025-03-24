import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";

export default function CategorySelect({ field, form, onChange }) {
  const { categories } = useNotices();

  const options = [
    { value: "", label: "Show all" },
    ...categories.map((category) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    })),
  ];

  const selectedOption =
    field.value === ""
      ? null
      : options.find((option) => option.value === field.value);

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(selected) => {
        form.setFieldValue(field.name, selected.value);
        onChange(selected.value);
      }}
      onBlur={field.onBlur}
      placeholder="Category"
      styles={{
        container: (base) => ({
          ...base,
          width: "173px",
          fontSize: "14px",
          fontWeight: "500",
          "@media (min-width: 768px)": {
            fontSize: "16px",
          },
        }),
        control: (base, { isFocused, isHovered }) => ({
          ...base,
          height: "42px",
          borderRadius: "30px",
          boxShadow: "none",
          border:
            isFocused || isHovered
              ? "1px solid #f6b83d"
              : "1px solid transparent",
          transition: "border 0.2s, box-shadow 0.2s",
          ":hover": {
            border: "1px solid #f6b83d",
          },
          "@media (min-width: 768px)": {
            height: "48px",
          },
        }),
        menu: (base) => ({
          ...base,
          borderRadius: "15px",
          border: "none",
          boxShadow: "none",
          outline: "none",
          height: "146px",
          overflowY: "scroll",
          overflowX: "hidden",
          color: "rgba(38, 38, 38, 0.6)",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "@media (min-width: 768px)": {
            height: "160px",
          },
        }),
        option: (provided, state) => ({
          ...provided,
          margin: "0",
          padding: "10px",
          backgroundColor: state.isFocused ? "#F6B83D" : "transparent",
          color: state.isFocused
            ? "#fff"
            : state.isSelected
            ? "#F6B83D"
            : "rgba(38, 38, 38, 0.6)",
          cursor: "pointer",
          borderRadius: state.isFocused ? "15px" : "0",
          transition: "background-color 0.2s ease, border-radius 0.2s ease",
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
        }),
        placeholder: (base) => ({
          ...base,
          color: "#262626",
        }),
        singleValue: (base) => ({
          ...base,
          color: "#262626",
        }),
      }}
    />
  );
}
