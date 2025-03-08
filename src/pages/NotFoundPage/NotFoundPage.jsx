import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <section>
      <div className={css.container}>
        <h1 className={css.title}>
          4<span className={css.titleImg}></span>4
        </h1>
        <p className={css.description}>Ooops! This page not found :( </p>
        <Link to="/home" className={css.link}>
          To home page
        </Link>
      </div>
    </section>
  );
}
