import UserBar from "../../../User/UserBar/UserBar";
import LogOutBtn from "../../../LogOutBtn/LogOutBtn";
import css from "./UserNav.module.css";

export default function UserNav({ isHome }) {
  return (
    <>
      <LogOutBtn isHome={isHome} />
      <UserBar />
    </>
  );
}
