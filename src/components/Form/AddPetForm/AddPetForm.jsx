import css from "./AddPetForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Title from "../../Title/Title";
import GenderInput from "./GenderInput/GenderInput";
import SpeciesSelect from "./SpeciesSelect/SpeciesSelect";
import PetAvatar from "./PetAvatar/PetAvatar";
import FileUploadInput from "./FileUploadInput/FileUploadInput";
import { validationSchemaAddPet } from "../../../validationSchemas/validationSchemas";
import { Button } from "../../Button/Button";
import DateInput from "./DateInput/DateInput";

export default function AddPetForm() {
  const initialValues = {
    name: "",
    title: "",
    imgURL: "",
    species: "",
    birthday: "",
    sex: "",
  };

  const onSubmit = (values) => {
    console.log("Данные формы:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaAddPet}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.addPetForm}>
          <div className={css.wrapTitle}>
            <Title text="Add my pet /" />
            <p className={css.subTitle}>Personal details</p>
          </div>

          <div>
            <GenderInput name="sex" value={values.sex} />
            <ErrorMessage name="sex" component="div" />
          </div>
          <PetAvatar imgUrl={values.imgURL && values.imgURL} />

          <FileUploadInput
            name="imgURL"
            setFieldValue={setFieldValue}
            value={values.imgURL}
          />
          <div>
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className={css.inputText}
            />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Pet’s Name"
              className={css.inputText}
            />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={css.lastInputBlockWraper}>
            <div>
              <DateInput
                name="birthday"
                value={values.birthday}
                setFieldValue={setFieldValue}
              />
              <ErrorMessage name="birthday" component="div" />
            </div>
            <div>
              <SpeciesSelect name="species" />
              <ErrorMessage name="species" component="div" />
            </div>
          </div>

          <div className={css.btnWrap}>
            <Button text="Back" className={css.btnBack} />
            <Button text="Submit" type="submit" className={css.btnSubmit} />
          </div>
        </Form>
      )}
    </Formik>
  );
}
