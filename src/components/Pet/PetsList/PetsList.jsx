import { useAuth } from "../../../hooks/useAuth";
import PetsItem from "../PetsItem/PetsItem";
import css from "./PetsList.module.css";

export default function PetsList() {
  const { pets } = useAuth();
  return (
    <>
      <ul className={css.petsList}>
        {pets.map((pet) => (
          <li className={css.petsItem} key={pet._id}>
            <PetsItem pet={pet} />
          </li>
        ))}
      </ul>
    </>
  );
}
