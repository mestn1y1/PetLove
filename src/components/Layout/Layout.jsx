import { useState, useEffect } from "react";
import css from "./Layout.module.css";
import Header from "./Header/Header";
import SplashScreen from "../SplashScreen/SplashScreen";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("splashShown") ? false : true;
  });

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("splashShown", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className={css.pageContainer}>
      {!loading && (
        <>
          <Header />
        </>
      )}
      <main className={loading ? css.loading : css.loaded}>
        {loading ? <SplashScreen /> : <Outlet />}
      </main>
    </div>
  );
}
