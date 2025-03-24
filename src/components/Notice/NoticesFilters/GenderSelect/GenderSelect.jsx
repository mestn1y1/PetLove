import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";

export default function GenderSelect({ onChange, field, form }) {
  const { genders } = useNotices();

  const options = [
    { value: "", label: "Show all" },
    ...genders.map((genders) => ({
      value: genders,
      label: genders.charAt(0).toUpperCase() + genders.slice(1),
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
      placeholder="By gender"
      styles={{
        container: (base) => ({
          ...base,
          width: "193px",
          fontSize: "14px",
          fontWeight: "500",
          "@media (min-width: 768px)": {
            fontSize: "16px",
            width: "180px",
          },
        }),
        control: (base, { isFocused, isHovered }) => ({
          ...base,
          height: "42px",
          border:
            isFocused || isHovered
              ? "1px solid #f6b83d"
              : "1px solid transparent",
          transition: "border 0.2s, box-shadow 0.2s",
          ":hover": {
            border: "1px solid #f6b83d",
          },
          borderRadius: "30px",
          boxShadow: "none",
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
            width: "6px",
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
