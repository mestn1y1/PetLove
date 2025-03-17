import { useState, useEffect } from "react";
import css from "./LoaderCustom.module.css";
import { Icons } from "../Icons/Icons";

export default function LoaderCustom() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.loaderBackdrop}>
      <div className={css.loaderWrapper}>
        <div className={css.loader}></div>
        <Icons
          iconName="pet"
          className={`${css.icon} ${isVisible ? css.visible : css.hidden}`}
        />
      </div>
    </div>
  );
}
