import { Link } from "react-router-dom";
import css from "./ProfilePage.module.css";
export default function ProfilePage() {
  return (
    <>
      <div>ProfilePage Component</div>
      <Link to="/add-pet">AddPages</Link>
    </>
  );
}
