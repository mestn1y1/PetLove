import css from "./NoItemsText.module.css";

export default function NoItemsText() {
  return (
    <p className={css.text}>
      Oops,
      <b className={css.subText}>looks like there aren&apos;t any furries </b>
      on our adorable page yet. Do not worry! View your pets on the &quot;find
      your favorite pet&quot; page and add them to your favorites.
    </p>
  );
}
