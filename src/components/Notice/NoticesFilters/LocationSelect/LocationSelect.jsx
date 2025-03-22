import { useState, useCallback } from "react";
import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";

export default function LocationSelect({ value, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const { cities } = useNotices();
  let filteredCities;

  if (inputValue?.length >= 3) {
    filteredCities = cities?.filter((city) =>
      `${city?.cityEn}`.toLowerCase().startsWith(inputValue?.toLowerCase())
    );
  }

  const options = filteredCities?.map((city) => ({
    value: `${city._id}`,
    label: `${city.stateEn}, ${city.cityEn}`,
  }));

  const formatOptionLabel = ({ value, label }) => {
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

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleByCity = (value) => {
    setInputValue(value);
  };

  const handleChangeLocation = (e) => {
    const debouncedOnChange = debounce((locationValue, keyword) => {
      onChange(locationValue, keyword);
    }, 300);

    debouncedOnChange(e?.value, inputValue);
  };

  const selectValue =
    value === null ? null : options?.find((option) => option.value === value);

  return (
    <>
      <Select
        onInputChange={handleByCity}
        onChange={handleChangeLocation}
        value={selectValue}
        options={options}
        placeholder={"Location"}
        maxMenuHeight={216}
        isClearable={true}
        formatOptionLabel={formatOptionLabel}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid transparent",
            width: "100%",
            height: "42px",
            marginTop: "12px",
            background: "var(--white-color)",
            borderRadius: "30px",
            fontSize: "14px",
            outline: "none",
            boxShadow: "none",
            animation: "appearDown 1400ms ease 1",
            fontWeight: "500",
            lineHeight: "1.29",
            letterSpacing: "-0.03em",
            color: "var(--dark-color)",
            fontFamily: "Manrope",
            cursor: "pointer",
            "&:hover": {
              borderColor: "var(--accent-color)",
            },
            "&:focus-within": {
              borderColor: "var(--accent-color)",
              outline: "none",
            },
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            fontSize: "14px",
            fontWeight: "500",
            fontFamily: "Manrope",
            lineHeight: "1.25",
            background: "transparent",
            cursor: "pointer",
            color: state.isFocused
              ? "var(--accent-color)"
              : "var(--placeholder-color)",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "30px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: "100%",
            borderRadius: "15px",
          }),
        }}
      />
    </>
  );
}
