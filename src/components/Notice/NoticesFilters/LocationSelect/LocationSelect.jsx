import { useState, useEffect } from "react";
import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";
import { fetchCities } from "../../../../redux/notices/operations";
import { useDispatch } from "react-redux";
import { CustomClearIndicator } from "./IndicatorClear";
import CustomDropdownIndicator from "./IndicatorDropDown";

export default function LocationSelect({ field, form, setLocationKeyword }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const { cities } = useNotices();

  useEffect(() => {
    if (inputValue?.length >= 3) {
      dispatch(fetchCities({ keyword: inputValue }));
    }
  }, [inputValue, dispatch]);

  const options = cities?.map((city) => ({
    value: city._id,
    label: `${city.stateEn}, ${city.cityEn}`,
  }));

  const formatOptionLabel = ({ label }) => {
    const parts = label.split(new RegExp(`(${inputValue})`, "gi"));
    return (
      <div>
        {parts.map((part, index) =>
          part.toLowerCase() === inputValue.toLowerCase() ? (
            <strong key={index}>{part}</strong>
          ) : (
            part
          )
        )}
      </div>
    );
  };
  const handleChange = (selectedOption) => {
    const locationValue = selectedOption ? selectedOption.value : "";
    form.setFieldValue(field.name, locationValue);

    setLocationKeyword(
      selectedOption ? selectedOption.label.split(", ")[1] : ""
    );
    form.submitForm();
  };

  return (
    <Select
      {...field}
      onInputChange={setInputValue}
      onChange={handleChange}
      value={options?.find((option) => option.value === field.value) || null}
      options={options}
      placeholder="Location"
      maxMenuHeight={216}
      isClearable
      components={{
        DropdownIndicator: CustomDropdownIndicator,
        IndicatorSeparator: null,
        ClearIndicator: CustomClearIndicator,
      }}
      formatOptionLabel={formatOptionLabel}
      styles={{
        container: (base) => ({
          ...base,
          width: "100%",
          fontSize: "14px",
          fontWeight: "500",
          "@media (min-width: 768px)": {
            fontSize: "16px",
            width: "240px",
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
          height: "auto",
          overflowY: "auto",
          overflowX: "hidden",
          color: "rgba(38, 38, 38, 0.6)",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": {
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
        dropdownIndicator: (base) => ({
          ...base,
          padding: "0",
          paddingRight: "12px",
          ":hover": {
            color: "#f6b83d",
          },
        }),
        clearIndicator: (base) => ({
          ...base,
          padding: "0",
          paddingRight: "4px",
        }),
      }}
    />
  );
}
