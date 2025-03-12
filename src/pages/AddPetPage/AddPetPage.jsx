import AddPetForm from "../../components/Form/AddPetForm/AddPetForm";
import PetBlock from "../../components/Pet/PetBlock/PetBlock";
import css from "./AddPetPage.module.css";
export default function AddPetPage() {
  return (
    <section className={css.addpetSection}>
      <PetBlock
        images={{
          mobile:
            "/images/mob/dog_pet_mob.png 1x, /images/mob/dog_pet_mob_x2.png 2x",
          tablet:
            "/images/tab/dog_pet_tab.png 1x, /images/tab/dog_pet_tab_x2.png 2x",
          desktop:
            "/images/desc/dog_pet.png 1x, /images/desc/dog_pet_x2.png 2x",
        }}
        alt="Dog"
        className={css.img}
      />
      <AddPetForm />
    </section>
  );
}
