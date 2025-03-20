import { Icons } from "../../../Icons/Icons";
import css from "./RenderStars.module.css";

export default function RenderStars({ popularity }) {
  const maxStars = 5;
  const stars = Array.from(
    { length: maxStars },
    (_, i) => i < Math.floor(popularity)
  );

  return (
    <ul className={css.starsList}>
      {stars.map((isGold, index) => (
        <li key={index}>
          <Icons
            iconName="star-grey"
            className={isGold ? css.star : css.starGrey}
          />
        </li>
      ))}
    </ul>
  );
}
