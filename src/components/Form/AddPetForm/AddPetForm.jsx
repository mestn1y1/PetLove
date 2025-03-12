import css from "./AddPetForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Title from "../../Title/Title";
import GenderInput from "./GenderInput/GenderInput";
import SpeciesSelect from "./SpeciesSelect/SpeciesSelect";
import PetAvatar from "./PetAvatar/PetAvatar";
import { validationSchemaAddPet } from "../../../validationSchemas/validationSchemas";

export default function AddPetForm() {
  const initialValues = {
    name: "",
    title: "",
    imgURL: "",
    species: "",
    birthday: "",
    sex: "",
  };

  const cloudURL = import.meta.env.VITE_CLOUDINARY_URL;
  const preset_key = import.meta.env.VITE_UPLOAD_PRESET;

  const onSubmit = (values) => {
    console.log("Данные формы:", values);
  };

  const handleFileChange = async (event, setFieldValue) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);

    try {
      const response = await fetch(cloudURL, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error();

      const data = await response.json();
      setFieldValue("imgURL", data.secure_url);
    } catch (error) {
      console.error(error.message);
    }
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

          <div>
            <PetAvatar imgUrl={values.imgURL && values.imgURL} />
          </div>
          <div>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <Field type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div>
            <input
              type="file"
              name="imgURL"
              accept="image/*"
              onChange={(event) => handleFileChange(event, setFieldValue)}
            />
            <ErrorMessage name="imgURL" component="div" />
          </div>

          <div>
            <Field type="text" name="imgURL" placeholder="Image URL " />
            <ErrorMessage name="imgURL" component="div" />
          </div>

          <div>
            <SpeciesSelect name="species" />
            <ErrorMessage name="species" component="div" />
          </div>

          <div>
            <Field type="date" name="birthday" />
            <ErrorMessage name="birthday" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
