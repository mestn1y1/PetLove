import * as Yup from "yup";

export const validationSchemaAddPet = Yup.object({
  name: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  imgURL: Yup.string().required("Required"),
  species: Yup.string().required("Required"),
  birthday: Yup.date().typeError("Invalid date").required("Required"),
  sex: Yup.string().required("Select gender"),
});

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export const validationSchemaRegistration = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
