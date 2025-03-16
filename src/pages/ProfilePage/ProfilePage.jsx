import css from "./ProfilePage.module.css";
import UserCard from "../../components/User/UserCard/UserCard";
import MyNotice from "../../components/Notice/MyNotices/MyNotices";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
export default function ProfilePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <section className={css.profilePage}>
      <UserCard />
      <MyNotice />
    </section>
  );
}
