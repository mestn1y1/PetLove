import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./DateInput.module.css";
import { Icons } from "../../../Icons/Icons";

export default function DateInput({ name, value, setFieldValue, ...props }) {
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!value);

  const selectedDate = value ? new Date(value) : null;
  const inputRef = useRef(null);

  const handleDateSelect = (date) => {
    const formattedDate = formatDate(date);
    setFieldValue(name, formattedDate);
    setIsFilled(true);
    setOpen(false);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={css.datePickerWrapper}>
      <div className={css.inputWrapper}>
        <DatePicker
          id={name}
          {...props}
          selected={selectedDate}
          onChange={(date) => {
            const formattedDate = formatDate(date);
            setFieldValue(name, formattedDate);
            setIsFilled(true);
          }}
          dateFormat="dd/MM/yyyy"
          className={`${css.dateInput} ${isFocused ? css.focused : ""} ${
            isFilled ? css.filled : ""
          }`}
          placeholderText="00.00.0000"
          open={open}
          onClickOutside={() => setOpen(false)}
          onSelect={handleDateSelect}
          popperPlacement="bottom-end"
          popperModifiers={{
            offset: {
              enabled: true,
              offset: "5px, 10px",
            },
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          popperClassName={css.datePickerPopper}
        />
        <button
          type="button"
          className={css.calendarButton}
          onClick={() => {
            setOpen(!open);
            inputRef.current.input.focus();
          }}
        >
          <Icons iconName="calendar" className={css.icon} />
        </button>
      </div>
    </div>
  );
}
