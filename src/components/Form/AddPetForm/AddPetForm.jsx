import css from "./AddPetForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Title from "../../Title/Title";
import GenderInput from "./GenderInput/GenderInput";
import SpeciesSelect from "./SpeciesSelect/SpeciesSelect";
import PetAvatar from "./PetAvatar/PetAvatar";
import FileUploadInput from "./FileUploadInput/FileUploadInput";
import { toast } from "react-toastify";
import { validationSchemaAddPet } from "../../../validationSchemas/validationSchemas";
import { Button } from "../../Button/Button";
import DateInput from "./DateInput/DateInput";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPet } from "../../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function AddPetForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    title: "",
    imgURL: "",
    species: "",
    birthday: "",
    sex: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(addPet(values)).unwrap();
      toast.success("Pet succes added!");
      resetForm();
    } catch (error) {
      toast.error(error);
    }
    navigate("/profile");
  };

  const handleBackClick = () => {
    navigate("/profile");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaAddPet}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values, touched, meta, errors }) => (
        <Form className={css.addPetForm}>
          <div className={css.wrapTitle}>
            <Title text="Add my pet /" />
            <p className={css.subTitle}>Personal details</p>
          </div>

          <div>
            <GenderInput name="sex" value={values.sex} />
            <ErrorMessage
              name="sex"
              component="div"
              className={css.erroForLastBlock}
            />
          </div>
          <PetAvatar
            imgUrl={values.imgURL && values.imgURL}
            imgUrlError={errors.imgURL}
          />

          <FileUploadInput
            name="imgURL"
            setFieldValue={setFieldValue}
            value={values.imgURL}
            touched={touched}
          />
          <div className={css.fieldWrapper}>
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className={`${css.inputText} ${touched.title ? css.changed : ""}`}
            />
            <ErrorMessage name="title" component="div" />
          </div>
          <div className={css.fieldWrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Pet’s Name"
              className={`${css.inputText} ${touched.name ? css.changed : ""}`}
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
              <ErrorMessage
                name="birthday"
                component="div"
                className={css.erroForLastBlock}
              />
            </div>
            <div>
              <SpeciesSelect name="species" meta={meta} />
              <ErrorMessage
                name="species"
                component="div"
                className={css.erroForLastBlock}
              />
            </div>
          </div>

          <div className={css.btnWrap}>
            <Button
              text="Back"
              className={css.btnBack}
              onClick={handleBackClick}
              type="button"
            />
            <Button text="Submit" type="submit" className={css.btnSubmit} />
          </div>
        </Form>
      )}
    </Formik>
  );
}
