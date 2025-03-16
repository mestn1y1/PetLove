import css from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { FiCheck } from "react-icons/fi";
import Title from "../../Title/Title";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/auth/operations";
import { selectIsLoading } from "../../../redux/auth/selectors";
import { validationSchemaRegistration } from "../../../validationSchemas/validationSchemas.js";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchemaRegistration}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      {({ errors, touched, values }) => (
        <Form className={css.form}>
          <Title text="Registration" />
          <p className={css.description}>
            Thank you for your interest in our platform.
          </p>
          <div className={css.inputContainer}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={`${css.input} ${
                touched.name && errors.name ? css.inputError : ""
              } ${touched.name && !errors.name ? css.inputSuccess : ""}`}
            />
            {touched.name && (
              <span className={css.icon}>
                {errors.name ? (
                  <LiaTimesSolid className={css.errorIcon} />
                ) : (
                  <FiCheck className={css.successIcon} />
                )}
              </span>
            )}
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.inputContainer}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={`${css.input} ${
                touched.email && errors.email ? css.inputError : ""
              } ${touched.email && !errors.email ? css.inputSuccess : ""}`}
            />
            {touched.email && (
              <span className={css.icon}>
                {errors.email ? (
                  <LiaTimesSolid className={css.errorIcon} />
                ) : (
                  <FiCheck className={css.successIcon} />
                )}
              </span>
            )}
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.inputContainer}>
            <div className={css.inputWrapper}>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={`${css.input} ${
                  touched.password && errors.password ? css.inputError : ""
                } ${
                  touched.password && !errors.password ? css.inputSuccess : ""
                }`}
              />
              <button
                type="button"
                className={css.toggleButton}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              {touched.password && (
                <span className={css.iconWithButton}>
                  {errors.password ? (
                    <LiaTimesSolid className={css.errorIcon} />
                  ) : (
                    <FiCheck className={css.successIcon} />
                  )}
                </span>
              )}
            </div>
            {!errors.password && values.password.length >= 6 && (
              <div className={css.success}>Password is secure</div>
            )}
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>
          <div className={css.inputContainer}>
            <div className={css.inputWrapper}>
              <Field
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                className={`${css.input} ${
                  touched.confirmPassword && errors.confirmPassword
                    ? css.inputError
                    : ""
                } ${
                  touched.confirmPassword && !errors.confirmPassword
                    ? css.inputSuccess
                    : ""
                }`}
              />
              <button
                type="button"
                className={css.toggleButton}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              {touched.confirmPassword && (
                <span className={css.iconWithButton}>
                  {errors.confirmPassword ? (
                    <LiaTimesSolid className={css.errorIcon} />
                  ) : (
                    <FiCheck className={css.successIcon} />
                  )}
                </span>
              )}
            </div>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={css.error}
            />
          </div>

          <Button
            text="Registration"
            className={css.buttonSubmit}
            type="submit"
            disabled={isLoading}
          />

          <p className={css.question}>
            Already have an account?{" "}
            <Link to="/login" className={css.link}>
              Login
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
