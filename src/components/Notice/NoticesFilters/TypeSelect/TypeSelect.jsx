import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";
export default function TypeSelect({ onChange, form, field }) {
  const { species } = useNotices();
  const options = [
    { value: "", label: "Show all" },
    ...species.map((species) => ({
      value: species,
      label: species.charAt(0).toUpperCase() + species.slice(1),
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
      placeholder="By type"
      styles={{
        container: (base) => ({
          ...base,
          width: "100%",
          fontSize: "14px",
          fontWeight: "500",
          "@media (min-width: 768px)": {
            fontSize: "16px",
            width: "190px",
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
