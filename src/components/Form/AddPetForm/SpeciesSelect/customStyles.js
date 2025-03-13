export const customStyles = {
  control: (base, state) => ({
    ...base,
    border: "1px solid rgba(38, 38, 38, 0.15)",
    borderRadius: "30px",
    height: "42px",
    width: "108px",
    boxShadow: "none",
    outline: "none",
    fontSize: "10px",
    padding: "6px",
    cursor: "pointer",

    "@media (min-width: 375px)": {
      width: "142px",
      fontSize: "14px",
      padding: "0",
      paddingRight: "12px",
      paddingLeft: "6px",
    },
    "@media (min-width: 768px)": {
      height: "52px",
      width: "230px",
      fontSize: "16px",
    },

    "&:hover": {
      borderColor: "#fff4df",
    },
  }),

  menu: (base) => ({
    ...base,
    borderRadius: "15px",
    border: "1px solid rgba(38, 38, 38, 0.15)",
    height: "78px",
    width: "108px",
    overflowY: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "@media (min-width: 375px)": {
      width: "143px",
    },
    "@media (min-width: 768px)": {
      height: "142px",
      width: "230px",
    },
  }),

  option: (base, { isFocused, isSelected }) => ({
    ...base,
    fontSize: "14px",
    padding: "2px 12px",
    backgroundColor: isSelected
      ? "rgba(38, 38, 38, 0.05)"
      : isFocused
      ? "#fff4df"
      : "white",
    color: isSelected ? "#f6b83d" : "rgba(38, 38, 38, 0.6)",
    "@media (min-width: 768px)": {
      fontSize: "16px",
    },
  }),

  placeholder: (base) => ({
    ...base,
    color: "rgba(38, 38, 38, 0.5)",
  }),

  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    padding: "0",
  }),
};
