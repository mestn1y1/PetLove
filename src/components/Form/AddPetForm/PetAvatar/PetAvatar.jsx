import css from "./PetAvatar.module.css";
import { Icons } from "../../../Icons/Icons";

export default function PetAvatar({ imgUrl, imgUrlError }) {
  return (
    <div className={css.wrapAvatar}>
      {imgUrl && !imgUrlError ? (
        <img src={imgUrl} alt="Pet Avatar" className={css.avatarImage} />
      ) : (
        <Icons iconName="pet" className={css.icons} />
      )}
    </div>
  );
}
