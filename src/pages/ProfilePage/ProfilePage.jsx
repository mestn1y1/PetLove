import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import LoaderCustom from "../../components/LoaderCustom/LoaderCustom";
import UserCard from "../../components/User/UserCard/UserCard";
import MyNotice from "../../components/Notice/MyNotices/MyNotices";
import css from "./ProfilePage.module.css";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <LoaderCustom />;
  }

  return (
    <section className={css.profilePage}>
      <UserCard />
      <div className={css.myNoticesContainer}>
        <MyNotice />
      </div>
    </section>
  );
}
