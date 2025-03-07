import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <section>
      <div className={css.titleWrap}>
        <h1 className={css.title}>
          Take good <span className={css.colorText}>care</span> of your small
          pets
        </h1>
        <p className={css.description}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/images/mob/home_mob.png 1x, /images/mob/home_mob_x2.png 2x"
        />
        <source
          media="(max-width: 1279px)"
          srcSet="/images/tab/home_tab.png 1x, /images/tab/home_tab_x2.png 2x"
        />
        <source
          media="(min-width: 1280px)"
          srcSet="/images/desc/home.png 1x, /images/desc/home_x2.png 2x"
        />
        <img src="/images/desc/home.png" alt="Logo" className={css.mainImg} />
      </picture>
    </section>
  );
}
