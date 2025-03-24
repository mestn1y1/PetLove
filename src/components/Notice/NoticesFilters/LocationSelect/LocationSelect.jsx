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
          transition: "border 0.2s, box-shadow 0.2s",
          ":hover": {
            border: "1px solid #f6b83d",
          },
          "@media (min-width: 768px)": {
            height: "48px",
            width: "240px",
          },
        }),
        clearIndicator: (base) => ({
          ...base,
          marginRight: "4px",
          padding: "0",
        }),
        dropdownIndicator: (base) => ({
          ...base,
          marginRight: "12px",
          padding: "0",
        }),
        menu: (base) => ({
          ...base,
          borderRadius: "15px",
          border: "none",
          boxShadow: "none",
          outline: "none",
          width: "100%",
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
        }),
        placeholder: (base) => ({
          ...base,
          color: "#262626",
        }),
      }}
    />
  );
}
