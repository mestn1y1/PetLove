import { Field } from "formik";
import { Icons } from "../../../Icons/Icons";
import css from "./GenderInput.module.css";
import { useDispatch } from "react-redux";
import { fetchGenders } from "../../../../redux/notices/operations";
import { useEffect } from "react";
import { useNotices } from "../../../../hooks/useNotices";

export default function GenderInput({ name, value }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenders());
  }, [dispatch]);

  const { genders } = useNotices();
  const limitedGenders = genders?.slice(0, 3) || [];

  return (
    <div className={css.radioGroup}>
      {limitedGenders.map((gender) => (
        <label
          key={gender}
          htmlFor={gender}
          className={`${css.radioLabel} ${value === gender ? css.active : ""}`}
        >
          <Field
            type="radio"
            name={name}
            id={gender}
            value={gender}
            className={css.radioInput}
          />
          <div className={css.iconWrap}>
            <Icons
              iconName={value === gender ? gender + "W" : gender}
              className={`${css.icons} ${css[gender]} ${
                value === gender
                  ? css[
                      `active${
                        gender.charAt(0).toUpperCase() + gender.slice(1)
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
