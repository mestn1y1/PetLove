import { Field } from "formik";
import Select from "react-select";
import { customStyles } from "./customStyles";
import { useNotices } from "../../../../hooks/useNotices";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSpecies } from "../../../../redux/notices/operations";
import { useFormikContext } from "formik"; // Импортируем useFormikContext

export default function SpeciesSelect({ name }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecies());
  }, [dispatch]);

  const { species } = useNotices();
  const { initialValues, values } = useFormikContext(); // Получаем initialValues и values

  const speciesOptions = species?.map((speciesName) => ({
    value: speciesName,
    label: speciesName.charAt(0).toUpperCase() + speciesName.slice(1),
  }));

  const isChanged = values[name] !== initialValues[name]; // Сравниваем значения

  return (
    <div className="speciesSelectContainer">
      <Field name={name}>
        {({ field, form }) => {
          const selectedValue = speciesOptions?.find(
            (option) => option.value === field.value
          );

          const handleChange = (selectedOption) => {
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
                styles={customStyles(isChanged)} // Передаем isChanged
              />
            </>
          );
        }}
      </Field>
    </div>
  );
}
