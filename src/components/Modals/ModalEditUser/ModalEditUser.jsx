import Avatar from "../../Form/AddPetForm/Avatar/Avatar";
import FileUploadInput from "../../Form/AddPetForm/FileUploadInput/FileUploadInput";
import { Icons } from "../../Icons/Icons";
import css from "./ModalEditUser.module.css";
import { validationSchemaUser } from "../../../validationSchemas/validationSchemas.js";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { Button } from "../../Button/Button";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUser } from "../../../redux/auth/operations";
import { toast } from "react-toastify";

export default function ModalEditUser({ handleClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user: { name, email, phone, avatar },
  } = useAuth();
  const initialValues = {
    name: name || "",
    email: email || "",
    phone: phone || "+380",
    avatar: avatar || "",
  };
  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(editUser(values)).unwrap();
      handleClose();
      toast.success("Data is updated successfully");
    } catch (error) {
      toast.error(`Something went wrong: ${error.message}`);
    }
    actions.setSubmitting(false);
  };
  const handleBackClick = () => {
    navigate("/profile");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchemaUser}
    >
      {({ setFieldValue, values, touched, errors, dirty }) => (
        <Form className={css.formWrap}>
          <button type="button" onClick={handleClose} className={css.btnClose}>
            <Icons iconName="close" className={css.iconClose} />
          </button>
          <h1 className={css.title}>Edit information</h1>
          <Avatar
            iconName="userY"
            imgUrl={values.avatar && values.avatar}
            imgUrlError={errors.avatar}
            className={css.avatarIcon}
            iconClassName={css.avatarIconSvg}
          />
          <FileUploadInput
            name="avatar"
            setFieldValue={setFieldValue}
            value={values.avatar}
            touched={touched}
            className={css.inputUrl}
          />
          <div className={css.fieldWrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={`${css.inputText} ${touched.name ? css.changed : ""}`}
            />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={css.fieldWrapper}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={`${css.inputText} ${touched.email ? css.changed : ""}`}
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={css.fieldWrapper}>
            <Field
              type="text"
              name="phone"
              placeholder="+380 "
              className={`${css.inputText} ${touched.phone ? css.changed : ""}`}
            />
            <ErrorMessage name="phone" component="div" />
          </div>
          {dirty ? (
            <Button type="submit" text="Save" className={css.submitBtn} />
          ) : (
            <Button
              type="button"
              text="Back to profile"
              className={css.submitBtn}
              onClick={handleClose}
            />
          )}
        </Form>
      )}
    </Formik>
  );
}
