import * as Yup from "yup";

export const validationSchemaAddPet = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name cannot exceed 50 characters")
    .required("Required"),
  title: Yup.string()
    .min(10, "Title must be at least 10 characters")
    .max(50, "Title cannot exceed 50 characters")
    .required("Required"),
  imgURL: Yup.string()
    .required("Required")
    .matches(
      /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/,
      "Enter a valid URL"
    ),
  species: Yup.string().required("Required"),
  birthday: Yup.date().typeError("Invalid date").required("Required"),
  sex: Yup.string().required("Select gender"),
});

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .max(35, "Email cannot exceed 35 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
});

export const validationSchemaRegistration = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .max(35, "Email cannot exceed 35 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const validationSchemaUser = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name cannot exceed 30 characters"),
  email: Yup.string().matches(
    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    "Invalid email format"
  ),
  imgURL: Yup.string().matches(
    /^https?:\/\/.*\.(png|jpg|jpeg|gif|bmp|webp)$/,
    "Invalid image URL"
  ),
  phone: Yup.string().matches(/^\+38\d{10}$/, "Invalid phone number format"),
});
