import RegistrationForm from "../../components/Form/RegistrationForm/RegistrationForm";
import pets from "../../Pets/pets";
import PetInfo from "../../components/Pet/PetInfo/PetInfo";
import PetBlock from "../../components/Pet/PetBlock/PetBlock";
import css from "./RegistrationPage.module.css";
export default function RegistrationPage() {
  const { name, avatar, birthday, description } = pets[1];
  return (
    <section className={css.containerRegistrationPage}>
      <div className={css.wrapImagePet}>
        <PetBlock
          images={{
            mobile: "/images/mob/cat_mob.png 1x, /images/mob/cat_mob_x2.png 2x",
            tablet: "/images/tab/cat_tab.png 1x, /images/tab/cat_tab_x2.png 2x",
            desktop: "/images/desc/cat.png 1x, /images/desc/cat_x2.png 2x",
          }}
          alt="Cat"
          className={css.img}
        />
        <PetInfo img={avatar} name={name} desc={description} date={birthday} />
      </div>

      <RegistrationForm />
    </section>
  );
}
