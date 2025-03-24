import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import SearchField from "../../News/SearchField/SearchField";
import CategorySelect from "./CategorySelect/CategorySelect";
import GenderSelect from "./GenderSelect/GenderSelect";
import TypeSelect from "./TypeSelect/TypeSelect";
import LocationSelect from "./LocationSelect/LocationSelect";
import RadioBtnSort from "./RadioBtnSort/RadioBtnSort";
import css from "./NoticesFilters.module.css";
import { useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchCities,
  fetchGenders,
  fetchSpecies,
} from "../../../redux/notices/operations";

export default function NoticesFilters({ onFilterChange }) {
  const dispatch = useDispatch();

  const [locationKeyword, setLocationKeyword] = useState("");
  const initialValues = {
    search: "",
    category: "",
    gender: "",
    type: "",
    location: "",
    sort: "",
  };

  const handleReset = (actions) => {
    actions.resetForm();
    setLocationKeyword("");
    onFilterChange(initialValues);
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenders());
    dispatch(fetchSpecies());
    if (locationKeyword.length > 0) {
      dispatch(fetchCities({ keyword: locationKeyword }));
    }
  }, [dispatch, locationKeyword]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onFilterChange(values)}
    >
      {({ values, resetForm, dirty }) => (
        <Form className={css.filterWrap}>
          <SearchField
            onSearch={(query) => onFilterChange({ ...values, search: query })}
            onCancel={() => onFilterChange({ ...values, search: "" })}
            className={css.searchBlock}
            classNameInput={css.classNameInputForSearchBlock}
          />
          <div className={css.genderAndCatehgoryWrap}>
            <Field
              name="category"
              component={CategorySelect}
              onChange={(value) =>
                onFilterChange({ ...values, category: value })
              }
            />
            <Field
              name="gender"
              component={GenderSelect}
              onChange={(value) => onFilterChange({ ...values, gender: value })}
            />
          </div>

          <Field
            name="type"
            component={TypeSelect}
            onChange={(value) => onFilterChange({ ...values, type: value })}
          />
          <Field
            name="location"
            component={LocationSelect}
            setLocationKeyword={setLocationKeyword}
            onChange={(selectedOption) => {
              // Оновлюємо значення в Formik та викликаємо фільтрацію
              onFilterChange({
                ...values,
                location: selectedOption?.value || "",
              });
            }}
          />
          <Field
            name="sort"
            component={RadioBtnSort}
            onChange={(value) => onFilterChange({ ...values, sort: value })}
          />

          {dirty && (
            <button
              type="button"
              className={css.resetBtn}
              onClick={() => handleReset({ resetForm })}
            >
              Reset
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
}
