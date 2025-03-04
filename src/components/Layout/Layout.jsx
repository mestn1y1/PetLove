import { useState, useEffect } from "react";
import css from "./Layout.module.css";
import Header from "./Header/Header";
import SplashScreen from "../SplashScreen/SplashScreen";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      {!loading && <Header />}
      <main>
        {loading && <SplashScreen />}
        <Outlet />
      </main>
    </>
  );
}
