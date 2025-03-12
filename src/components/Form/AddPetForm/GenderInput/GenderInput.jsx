import { Field } from "formik";
import { Icons } from "../../../Icons/Icons";
import css from "./GenderInput.module.css";

const genderOptions = [
  { id: "female", value: "female" },
  { id: "male", value: "male" },
  { id: "multiple", value: "multiple" },
];

export default function GenderInput({ name, value }) {
  return (
    <div className={css.radioGroup}>
      {genderOptions.map((option) => (
        <label
          key={option.id}
          htmlFor={option.id}
          className={`${css.radioLabel} ${
            value === option.value ? css.active : ""
          }`}
        >
          <Field
            type="radio"
            name={name}
            id={option.id}
            value={option.value}
            className={css.radioInput}
          />
          <div className={css.iconWrap}>
            <Icons
              iconName={
                value === option.value ? option.value + "W" : option.value
              }
              className={`${css.icons} ${css[option.value]} ${
                value === option.value
                  ? css[
                      `active${
                        option.value.charAt(0).toUpperCase() +
                        option.value.slice(1)
                      }`
                    ]
                  : ""
              }`}
            />
          </div>
        </label>
      ))}
    </div>
  );
}
