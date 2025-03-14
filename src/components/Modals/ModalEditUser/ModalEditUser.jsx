import Avatar from "../../Form/AddPetForm/Avatar/Avatar";
import FileUploadInput from "../../Form/AddPetForm/FileUploadInput/FileUploadInput";
import { Icons } from "../../Icons/Icons";
import Title from "../../Title/Title";
import css from "./ModalEditUser.module.css";
import { validationSchemaUser } from "../../../validationSchemas/validationSchemas";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { Button } from "../../Button/Button";

export default function ModalEditUser({ handleClose }) {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    imgURL: "", // Добавляем в начальные значения
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchemaUser}
    >
      {({ setFieldValue, values, touched, errors }) => (
        <Form className={css.formWrap}>
          <button type="button" onClick={handleClose} className={css.btnClose}>
            <Icons iconName="close" className={css.iconClose} />
          </button>
          <h1 className={css.title}>Edit information</h1>
          <Avatar
            iconName="userY"
            imgUrl={values.imgURL && values.imgURL}
            imgUrlError={errors.imgURL}
            className={css.avatarIcon}
            iconClassName={css.avatarIconSvg}
          />
          <FileUploadInput
            name="imgURL"
            setFieldValue={setFieldValue}
            value={values.imgURL}
            touched={touched}
            className={css.inputUrl}
          />
          <div className={css.fieldWrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={`${css.inputText} ${touched.title ? css.changed : ""}`}
            />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={css.fieldWrapper}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={`${css.inputText} ${touched.name ? css.changed : ""}`}
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={css.fieldWrapper}>
            <Field
              type="text"
              name="phone"
              placeholder="+380 "
              className={`${css.inputText} ${touched.name ? css.changed : ""}`}
            />
            <ErrorMessage name="phone" component="div" />
          </div>
          <Button type="submit" text="Save" className={css.submitBtn} />
        </Form>
      )}
    </Formik>
  );
}
