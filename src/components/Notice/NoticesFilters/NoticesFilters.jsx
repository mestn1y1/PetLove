import { Formik, Form } from "formik";
import SearchField from "../../News/SearchField/SearchField";
import CategorySelect from "./CategorySelect/CategorySelect";
import GenderSelect from "./GenderSelect/GenderSelect";
import TypeSelect from "./TypeSelect/TypeSelect";
import LocationSelect from "./LocationSelect/LocationSelect";
import RadioBtnSort from "./RadioBtnSort/RadioBtnSort";
import css from "./NoticesFilters.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchCategories,
  fetchCities,
  fetchGenders,
  fetchSpecies,
} from "../../../redux/notices/operations";

export default function NoticesFilters({ onFilterChange }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenders());
    dispatch(fetchSpecies());
    dispatch(fetchCities());
  }, [dispatch]);

  const initialValues = {
    search: "",
    category: "",
    gender: "",
    type: "",
    location: "",
    sort: "popular",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onFilterChange(values)}
    >
      {({ values, handleReset }) => (
        <Form className={css.filterWrap}>
          <SearchField
            onSearch={(query) => onFilterChange({ ...values, search: query })}
            onCancel={() => onFilterChange({ ...values, search: "" })}
          />
          <div className={css.selectFlex}>
            <CategorySelect
              onChange={(value) =>
                onFilterChange({ ...values, category: value })
              }
            />
            <GenderSelect
              onChange={(value) => onFilterChange({ ...values, gender: value })}
            />
          </div>

          <TypeSelect
            onChange={(value) => onFilterChange({ ...values, type: value })}
          />

          <LocationSelect
            onChange={(value) => onFilterChange({ ...values, location: value })}
          />

          <RadioBtnSort
            onChange={(value) => onFilterChange({ ...values, sort: value })}
          />

          <button type="button" className={css.resetBtn} onClick={handleReset}>
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
}
