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
          width: "200px",
        }),
      }}
    />
  );
}
