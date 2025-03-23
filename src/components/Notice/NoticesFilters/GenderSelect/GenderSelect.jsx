import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";
export default function GenderSelect({ onChange, value }) {
  const { genders } = useNotices();
  const options = genders.map((sex) => ({
    value: sex,
    label: sex.charAt(0).toUpperCase() + sex.slice(1),
  }));
  const selectedOption = options.find((option) => option.value === value);
  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(selected) => onChange(selected.value)}
      placeholder="By gender"
      styles={{
        container: (base) => ({
          ...base,
          width: "193px",
          fontSize: "14px",
          fontWeight: "500",
          // "@media (min-width: 375px)": {
          //   fontSize: "16px",
          // },
        }),
        control: (base) => ({
          ...base,
          height: "42px",
          border: "none",
          borderRadius: "30px",
          boxShadow: "none",
        }),
        menu: (base) => ({
          ...base,
          borderRadius: "10px",
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
