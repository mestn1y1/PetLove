import { Field } from "formik";
import Select from "react-select";
import css from "./SpeciesSelect.module.css";

const speciesOptions = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "monkey", label: "Monkey" },
  { value: "bird", label: "Bird" },
  { value: "snake", label: "Snake" },
  { value: "turtle", label: "Turtle" },
  { value: "lizard", label: "Lizard" },
  { value: "frog", label: "Frog" },
  { value: "fish", label: "Fish" },
  { value: "ants", label: "Ants" },
  { value: "bees", label: "Bees" },
  { value: "butterfly", label: "Butterfly" },
  { value: "spider", label: "Spider" },
  { value: "scorpion", label: "Scorpion" },
];

export default function SpeciesSelect({ name }) {
  return (
    <div className={css.speciesSelect}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const selectedValue = speciesOptions.find(
            (option) => option.value === field.value
          );

          const handleChange = (selectedOption) => {
            // Передаем только значение (value), а не весь объект
            form.setFieldValue(
              name,
              selectedOption ? selectedOption.value : ""
            );
          };

          return (
            <>
              <Select
                name={name}
                value={selectedValue}
                onChange={handleChange}
                options={speciesOptions}
                placeholder="Type of pet"
                classNamePrefix="react-select"
              />
              {meta.touched && meta.error && (
                <div className={css.error}>{meta.error}</div>
              )}
            </>
          );
        }}
      </Field>
    </div>
  );
}
