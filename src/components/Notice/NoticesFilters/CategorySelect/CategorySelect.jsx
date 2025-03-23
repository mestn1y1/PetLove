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
          width: "173px",
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
