import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";

export default function CategorySelect({ field, form, onChange }) {
  const { categories } = useNotices();

  const options = [
    { value: "", label: "Show all" },
    ...categories.map((category) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    })),
  ];

  const selectedOption = options.find((option) => option.value === field.value);

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={(selected) => {
        form.setFieldValue(field.name, selected.value);
        onChange(selected.value);
      }}
      onBlur={field.onBlur}
      placeholder="Category"
      styles={{
        container: (base) => ({
          ...base,
          width: "173px",
          fontSize: "14px",
          fontWeight: "500",
          "@media (min-width: 768px)": {
            fontSize: "16px",
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
