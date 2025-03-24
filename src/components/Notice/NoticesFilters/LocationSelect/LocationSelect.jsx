import { useState } from "react";
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

  const handleChangeLocation = (e) => {
    const debouncedOnChange = debounce((locationValue, keyword) => {
      onChange(locationValue, keyword);
    }, 300);

    if (e) {
      const selectedOption = options?.find(
        (option) => option.value === e.value
      );
      if (selectedOption) {
        setInputValue(selectedOption.label.split(", ")[1]);
      }
    }

    debouncedOnChange(e?.value, inputValue);
  };

  const selectValue =
    value === null ? null : options?.find((option) => option.value === value);

  return (
    <>
      <Select
        onInputChange={(value) => setInputValue(value)}
        onChange={handleChangeLocation}
        value={selectValue}
        options={options}
        placeholder={"Location"}
        maxMenuHeight={216}
        isClearable={true}
        formatOptionLabel={formatOptionLabel}
        styles={{
          container: (base) => ({
            ...base,
            width: "100%",
            fontSize: "14px",
            fontWeight: "500",
            "@media (min-width: 768px)": {
              fontSize: "16px",
              width: "227px",
            },
          }),
          control: (base) => ({
            ...base,
            height: "42px",
            border: "none",
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
    </>
  );
}
