import css from "./Avatar.module.css";
import { Icons } from "../../../Icons/Icons";

export default function Avatar({
  imgUrl,
  imgUrlError,
  iconName,
  className,
  imageClassName,
  iconClassName,
}) {
  return (
    <div className={`${css.wrapAvatar} ${className || ""}`}>
      {imgUrl && !imgUrlError ? (
        <img
          src={imgUrl}
          alt="Avatar"
          className={`${css.avatarImage} ${imageClassName || ""}`}
        />
      ) : (
        <Icons
          iconName={iconName}
          className={`${css.icons} ${iconClassName || ""}`}
        />
      )}
    </div>
  );
}
