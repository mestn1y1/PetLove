import { components } from "react-select";
import { Icons } from "../../Icons/Icons";
export default function CustomDropdownIndicator(props) {
  const {
    selectProps: { menuIsOpen },
  } = props;

  return (
    <components.DropdownIndicator {...props}>
      <Icons
        iconName="down"
        style={{
          fill: "transparent",
          stroke: "#262626",
          width: "20px",
          height: "20px",
          transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease",
        }}
      />
    </components.DropdownIndicator>
  );
}

//   <span
//     style={{
//       transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
//       transition: "transform 0.2s ease",
//     }}
//   >
//     ▼ {/* Иконка стрелки */}
//   </span>
