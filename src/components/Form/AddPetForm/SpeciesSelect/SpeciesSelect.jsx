import { Field } from "formik";
import Select from "react-select";
import { useNotices } from "../../../../hooks/useNotices";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSpecies } from "../../../../redux/notices/operations";
import { useFormikContext } from "formik";
import customDropDownIndicatorForAll from "../../../Notice/NoticesFilters/customDropDownIndicatorForAll";

export default function SpeciesSelect({ name }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecies());
  }, [dispatch]);

  const { species } = useNotices();
  const { initialValues, values } = useFormikContext();

  const speciesOptions = species?.map((speciesName) => ({
    value: speciesName,
    label: speciesName.charAt(0).toUpperCase() + speciesName.slice(1),
  }));

  const isChanged = values[name] !== initialValues[name];

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
                components={{
                  DropdownIndicator: customDropDownIndicatorForAll,
                }}
                classNamePrefix="react-select"
                styles={{
                  control: (base, state) => ({
                    ...base,
                    border: isChanged
                      ? "1px solid #f6b83d"
                      : "1px solid rgba(38, 38, 38, 0.15)",
                    borderRadius: "30px",
                    height: "42px",
                    width: "108px",
                    boxShadow: "none",
                    outline: "none",
                    fontSize: "10px",
                    padding: "6px",
                    cursor: "pointer",

                    "@media (min-width: 375px)": {
                      width: "142px",
                      fontSize: "14px",
                      padding: "0",
                      paddingRight: "12px",
                      paddingLeft: "6px",
                    },

                    "@media (min-width: 768px)": {
                      height: "52px",
                      width: "230px",
                      fontSize: "16px",
                    },
                    "@media (min-width: 1280px)": {
                      height: "52px",
                      width: "248px",
                      fontSize: "16px",
                    },
                    "&:hover": {
                      borderColor: "#f6b83d",
                    },
                    ...(state.isFocused && {
                      border: "1px solid #f6b83d",
                    }),
                  }),

                  menu: (base) => ({
                    ...base,
                    borderRadius: "15px",
                    border: "1px solid rgba(38, 38, 38, 0.15)",
                    height: "78px",
                    width: "108px",
                    overflowY: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                    "@media (min-width: 375px)": {
                      width: "143px",
                    },
                    "@media (min-width: 768px)": {
                      height: "142px",
                      width: "230px",
                    },
                    "@media (min-width: 1280px)": {
                      width: "248px",
                      maxHeight: "200px",
                      overflowY: "scroll",
                    },
                  }),

                  option: (base, { isFocused, isSelected }) => ({
                    ...base,
                    fontSize: "14px",
                    padding: "2px 12px",
                    backgroundColor: isSelected
                      ? "#F6B83D"
                      : isFocused
                      ? "#F6B83D"
                      : "white",
                    color:
                      isSelected || isFocused
                        ? "#fff"
                        : "rgba(38, 38, 38, 0.6)",
                    borderRadius: "15px",
                    ":active": {
                      backgroundColor: "transparent",
                    },
                    "@media (min-width: 768px)": {
                      fontSize: "16px",
                    },
                  }),

                  placeholder: (base) => ({
                    ...base,
                    color: "rgba(38, 38, 38, 0.5)",
                  }),

                  indicatorSeparator: (base) => ({
                    ...base,
                    display: "none",
                  }),

                  dropdownIndicator: (base) => ({
                    ...base,
                    padding: "0",
                  }),
                }}
              />
            </>
          );
        }}
      </Field>
    </div>
  );
}
