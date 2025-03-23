import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";
export default function TypeSelect({ onChange, value }) {
  const { species } = useNotices();
  const options = species.map((species) => ({
    value: species,
    label: species.charAt(0).toUpperCase() + species.slice(1),
  }));

  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(selected) => onChange(selected.value)}
      placeholder="By type"
      styles={{
        container: (base) => ({
          ...base,
          width: "100%",
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
