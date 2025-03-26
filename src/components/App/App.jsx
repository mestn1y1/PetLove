import { lazy, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Layout/Layout";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const News = lazy(() => import("../../pages/NewsPage/NewsPage"));
const Notices = lazy(() => import("../../pages/NoticesPage/NoticesPage"));
const Friends = lazy(() => import("../../pages/FriendsPage/FriendsPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const NotFound = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const Profile = lazy(() => import("../../pages/ProfilePage/ProfilePage"));
const AddPet = lazy(() => import("../../pages/AddPetPage/AddPetPage"));
const Viewed = lazy(() => import("../Notice/Viewed/Viewed"));
const Favorites = lazy(() => import("../Notice/Favorites/Favorites"));

import LoaderCustom from "../LoaderCustom/LoaderCustom";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<LoaderCustom />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/friends" element={<Friends />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute redirectTo="/home" component={<Profile />} />
              }
            >
              <Route index element={<Favorites />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="viewed" element={<Viewed />} />
            </Route>
            <Route
              path="add-pet"
              element={
                <PrivateRoute redirectTo="/home" component={<AddPet />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
