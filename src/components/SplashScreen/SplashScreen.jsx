import { useEffect, useState } from "react";
import css from "./SplashScreen.module.css";
import Loader from "../Loader/Loader";

export default function SplashScreen() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
    }, 1500);

    return () => {
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <div className={css.container}>
      {showLogo ? (
        <img src="/images/logo.svg" alt="Logo" className={css.logo} />
      ) : (
        <Loader />
      )}
    </div>
  );
}
