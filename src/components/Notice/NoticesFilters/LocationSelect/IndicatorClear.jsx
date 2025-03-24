import { components } from "react-select";
import { Icons } from "../../../Icons/Icons";

export function CustomClearIndicator(props) {
  return (
    <components.ClearIndicator {...props}>
      <Icons
        iconName="close"
        style={{
          width: "14px",
          height: "14px",
          stroke: "#262626",
        }}
      />
    </components.ClearIndicator>
  );
}
