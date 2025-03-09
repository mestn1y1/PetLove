// import css from "./RegistrationForm.module.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { LiaTimesSolid } from "react-icons/lia";
// import { FiCheck } from "react-icons/fi";
// import Title from "../../Title/Title";
// import { Button } from "../../Button/Button";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .min(2, "Name must be at least 2 characters")
//     .required("Name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm password is required"),
// });

// export default function RegistrationForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleSubmit = (values) => {
//     console.log("Form data submitted:", values);
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         handleSubmit(values);
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form className={css.form}>
//           <Title text="Registration" />
//           <p className={css.description}>
//             Thank you for your interest in our platform.
//           </p>
//           <div>
//             <Field
//               type="text"
//               name="name"
//               placeholder="Name"
//               className={`${css.input} ${
//                 touched.name && errors.name ? css.inputError : ""
//               } ${touched.name && !errors.name ? css.inputSuccess : ""}`}
//             />
//             <ErrorMessage name="name" component="div" className={css.error} />
//           </div>
//           <div>
//             <Field
//               type="email"
//               name="email"
//               placeholder="Email"
//               className={`${css.input} ${
//                 touched.email && errors.email ? css.inputError : ""
//               } ${touched.email && !errors.email ? css.inputSuccess : ""}`}
//             />
//             {touched.email && (
//               <span className={css.icon}>
//                 {errors.email ? (
//                   <LiaTimesSolid className={css.errorIcon} />
//                 ) : (
//                   <FiCheck className={css.successIcon} />
//                 )}
//               </span>
//             )}
//             <ErrorMessage name="email" component="div" className={css.error} />
//           </div>
//           <div>
//             <div className={css.inputWrapper}>
//               <Field
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 className={`${css.input} ${
//                   touched.password && errors.password ? css.inputError : ""
//                 } ${
//                   touched.password && !errors.password ? css.inputSuccess : ""
//                 }`}
//               />
//               <button
//                 type="button"
//                 className={css.toggleButton}
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </button>
//             </div>
//             <ErrorMessage
//               name="password"
//               component="div"
//               className={css.error}
//             />
//           </div>
//           <div>
//             <div className={css.inputWrapper}>
//               <Field
//                 type={showPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 placeholder="Confirm password"
//                 className={`${css.input} ${
//                   touched.confirmPassword && errors.confirmPassword
//                     ? css.inputError
//                     : ""
//                 } ${
//                   touched.confirmPassword && !errors.confirmPassword
//                     ? css.inputSuccess
//                     : ""
//                 }`}
//               />
//               <button
//                 type="button"
//                 className={css.toggleButton}
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </button>
//             </div>
//             {touched.password && (
//               <span className={css.iconWithButton}>
//                 {errors.password ? (
//                   <LiaTimesSolid className={css.errorIcon} />
//                 ) : (
//                   <FiCheck className={css.successIcon} />
//                 )}
//               </span>
//             )}
//             <ErrorMessage
//               name="confirmPassword"
//               component="div"
//               className={css.error}
//             />
//           </div>

//           <Button
//             text="Registration"
//             className={css.buttonSubmit}
//             type="submit"
//           />

//           <p className={css.question}>
//             Already have an account?{" "}
//             <Link to="/login" className={css.link}>
//               Login
//             </Link>
//           </p>
//         </Form>
//       )}
//     </Formik>
//   );
// }
import css from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { FiCheck } from "react-icons/fi";
import Title from "../../Title/Title";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (values) => {
    console.log("Form data submitted:", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
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
