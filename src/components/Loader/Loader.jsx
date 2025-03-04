import { useState, useEffect } from "react";
import css from "./Loader.module.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className={css.container}>
      <img src="/images/loader.png" alt="loader" className={css.loaderImg} />
      <span>{progress}%</span>
    </div>
  );
}
