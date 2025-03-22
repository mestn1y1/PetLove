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
          width: "200px",
        }),
      }}
    />
  );
}
