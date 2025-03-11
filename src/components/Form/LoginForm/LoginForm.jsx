import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../redux/auth/operations";

import Title from "../../Title/Title";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values));
      actions.resetForm();
    } catch (error) {
      console.error("Login failed:", error);
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <Title text="Log in" />
          <p className={css.description}>
            Welcome! Please enter your credentials to login to the platform:
          </p>
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
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
            {touched.password && !errors.password && (
              <div className={css.success}>Password is secure</div>
            )}
          </div>

          <Button text="Log in" className={css.buttonSubmit} type="submit" />
          <p className={css.question}>
            Don’t have an account?
            <Link to="/register" className={css.link}>
              Register
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
