import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";
import customDropDownIndicatorForAll from "../customDropDownIndicatorForAll";

export default function TypeSelect({ onChange, form, field }) {
  const { species } = useNotices();
  const options = [
    { value: "", label: "Show all" },
    ...species.map((species) => ({
      value: species,
      label: species.charAt(0).toUpperCase() + species.slice(1),
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
      components={{
        DropdownIndicator: customDropDownIndicatorForAll,
      }}
      onBlur={field.onBlur}
      placeholder="By type"
      styles={{
        container: (base) => ({
          ...base,
          width: "100%",
          fontSize: "14px",
          fontWeight: "500",
          "@media (min-width: 768px)": {
            fontSize: "16px",
            width: "190px",
          },
        }),
        control: (base, { isFocused, isHovered }) => ({
          ...base,
          height: "42px",
          border:
            isFocused || isHovered
              ? "1px solid #f6b83d"
              : "1px solid transparent",
          borderRadius: "30px",
          boxShadow: "none",
          outline: "none",
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
          height: "216px",
          overflowY: "auto",
          overflowX: "hidden",
          color: "rgba(38, 38, 38, 0.6)",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "&::-webkit-scrollbar-thumb": {
            display: "none",
          },
          "&::-webkit-scrollbar-track": {
            display: "none",
          },
        }),
        option: (provided, state) => ({
          ...provided,
          margin: "0",
          padding: "10px",
          boxShadow: "none",
          outline: "none",
          ":active": {
            backgroundColor: "transparent",
          },
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
