import formatDate from "../../../helpers/formaterDate";
import { Icons } from "../../Icons/Icons";
import css from "./PetsItem.module.css";
export default function PetsItem({
  pet: { name, birthday, sex, species, title, _id, imgURL },
}) {
  return (
    <>
      <button className={css.petDeleteBtn}>
        <Icons iconName="trash" className={css.petBtnIcon} />
      </button>
      <img className={css.petAvatar} src={imgURL} alt="petsAvatar" />
      <div className={css.petInfoContainer}>
        <h2 className={css.petTitle}>
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h2>
        <ul className={css.petInfoList}>
          <li className={css.petInfoItem}>
            <p className={css.petInfoHeader}>
              Name
              <span className={css.petInfoTExt}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
            </p>
          </li>
          <li className={css.petInfoItem}>
            <p className={css.petInfoHeader}>
              Birthday
              <span className={css.petInfoTExt}>{formatDate(birthday)}</span>
            </p>
          </li>
          <li className={css.petInfoItem}>
            <p className={css.petInfoHeader}>
              Sex
              <span className={css.petInfoTExt}>
                {sex.charAt(0).toUpperCase() + sex.slice(1)}
              </span>
            </p>
          </li>
          <li className={css.petInfoItem}>
            <p className={css.petInfoHeader}>
              Species
              <span className={css.petInfoTExt}>
                {species.charAt(0).toUpperCase() + species.slice(1)}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

// {
//   user.name.charAt(0).toUpperCase() + user.name.slice(1);
// }
