import { Link } from "react-router-dom";
import css from "./ProfilePage.module.css";
import UserCard from "../../components/User/UserCard/UserCard";
import MyNotice from "../../components/Notice/MyNotices/MyNotices";
export default function ProfilePage() {
  return (
    <section>
      <UserCard />
      <MyNotice />
      <Link to="/add-pet">add</Link>
    </section>
  );
}
