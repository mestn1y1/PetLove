import { Link } from "react-router-dom";
import css from "./FriendsItem.module.css";

export default function FriendsItem({
  friendsItem: {
    imageUrl,
    title,
    phone,
    url,
    email,
    address,
    addressUrl,
    workDays,
  },
}) {
  const workDay =
    workDays && Array.isArray(workDays)
      ? workDays.find((day) => day.from && day.to)
      : null;
  return (
    <>
      <p className={css.friendsItemBeidge}>
        {workDay ? (
          <span className={css.friendsItemBeidgeInfo}>
            {workDay.from} - {workDay.to}
          </span>
        ) : (
          <span className={css.friendsItemBeidgeInfo}>Day and Night</span>
        )}
      </p>
      <img src={imageUrl} className={css.friendsItemLogo} alt="Logo" />
      <div className={css.friendsItemInfoBlock}>
        <h2 className={css.friendsItemTitle}>{title}</h2>
        <ul className={css.friendsItemContactInfoList}>
          <li className={css.friendsItemContactInfoItem}>
            <p className={css.friendsItemContactInfoText}>
              Email:
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className={css.friendsItemEmailLink}
                >
                  {email}
                </a>
              ) : (
                <a href={url} className={css.friendsItemEmailLink}>
                  website only
                </a>
              )}
            </p>
          </li>
          <li className={css.friendsItemContactInfoItem}>
            <p className={css.friendsItemContactInfoText}>
              Address:
              {address ? (
                <a href={addressUrl} className={css.friendsItemEmailLink}>
                  {address}
                </a>
              ) : (
                <a href={url} className={css.friendsItemEmailLink}>
                  website only
                </a>
              )}
            </p>
          </li>
          <li className={css.friendsItemContactInfoItem}>
            <p className={css.friendsItemContactInfoText}>
              Phone:
              {phone ? (
                <a href={`tel:${phone}`} className={css.friendsItemEmailLink}>
                  {phone}
                </a>
              ) : (
                <a href={url} className={css.friendsItemEmailLink}>
                  website only
                </a>
              )}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
