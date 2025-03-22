import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";

export default function CategorySelect({ onChange, value }) {
  const { categories } = useNotices();
  const options = categories.map((category) => ({
    value: category,
    label: category.charAt(0).toUpperCase() + category.slice(1),
  }));

  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(selected) => onChange(selected.value)}
      placeholder="Category"
      styles={{
        container: (base) => ({
          ...base,
          width: "200px",
        }),
      }}
    />
  );
}
