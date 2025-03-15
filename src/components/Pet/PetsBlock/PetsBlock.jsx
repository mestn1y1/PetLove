import { NavLink } from "react-router-dom";
import css from "./PetsBlock.module.css";
import { Icons } from "../../Icons/Icons";
import PetsList from "../PetsList/PetsList";
export default function PetsBlock() {
  return (
    <>
      <div className={css.wrapContainer}>
        <h2 className={css.title}>My pets</h2>
        <NavLink to="/add-pet" className={css.linkTo}>
          Add pet <Icons iconName="plus" className={css.icon} />
        </NavLink>
      </div>
      <PetsList />
    </>
  );
}
