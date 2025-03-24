import { components } from "react-select";
import { Icons } from "../../../Icons/Icons";
export default function CustomDropdownIndicator(props) {
  return (
    <components.DropdownIndicator {...props}>
      <Icons
        iconName="search"
        style={{
          width: "16px",
          height: "16px",
          fill: "transparent",
          stroke: "#262626",
        }}
      />
    </components.DropdownIndicator>
  );
}
export function CustomClearIndicator(props) {
  return (
    <components.ClearIndicator {...props}>
      <Icons
        iconName="close"
        style={{
          width: "16px",
          height: "16px",
          stroke: "#262626",
        }}
      />
    </components.ClearIndicator>
  );
}
