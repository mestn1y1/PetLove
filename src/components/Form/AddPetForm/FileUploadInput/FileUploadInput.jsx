import { Field, ErrorMessage } from "formik";
import css from "./FileUploadInput.module.css";
import { Icons } from "../../../Icons/Icons";

export default function FileUploadInput({
  name,
  setFieldValue,
  value,
  touched,
}) {
  const cloudURL = import.meta.env.VITE_CLOUDINARY_URL;
  const preset_key = import.meta.env.VITE_UPLOAD_PRESET;

  const handleFileChange = async (event) => {
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
      setFieldValue(name, data.secure_url);
    } catch (error) {}
  };

  return (
    <div className={css.wrapInput}>
      <div>
        <Field
          type="text"
          name={name}
          placeholder="Enter URL"
          value={value}
          className={`${css.inputText} ${touched.name ? css.changed : ""}`}
        />
        <ErrorMessage name={name} component="div" className={css.error} />
      </div>

      <div className={css.fileInputWrapper}>
        <input
          id={name}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={css.hiddenInput}
        />
        <label htmlFor={name} className={css.customFileUpload}>
          <span>Upload photo</span>
          <Icons iconName="upload" className={css.uploadIcon} />
        </label>
      </div>
    </div>
  );
}
