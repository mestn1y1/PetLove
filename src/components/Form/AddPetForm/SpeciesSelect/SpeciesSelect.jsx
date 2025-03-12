import { Field } from "formik";
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
      <Field as="select" name={name}>
        <option value="">Select species</option>
        {speciesOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    </div>
  );
}
