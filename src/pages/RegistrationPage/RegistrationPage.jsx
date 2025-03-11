import RegistrationForm from "../../components/Form/RegistrationForm/RegistrationForm";
import pets from "../../Pets/pets";
import PetBlock from "../../components/Pet/PetBlock/PetBlock";
import css from "./RegistrationPage.module.css";
export default function RegistrationPage() {
  const { name, avatar, birthday, description } = pets[1];
  return (
    <section className={css.containerRegistrationPage}>
      <div className={css.wrapImagePet}>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/mob/cat_mob.png 1x, /images/mob/cat_mob_x2.png 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcSet="/images/tab/cat_tab.png 1x, /images/tab/cat_tab_x2.png 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/desc/cat.png 1x, /images/desc/cat_x2.png 2x"
          />
          <img src="/images/desc/cat.png" alt="Cat" className={css.img} />
        </picture>
        <PetBlock img={avatar} name={name} desc={description} date={birthday} />
      </div>

      <RegistrationForm />
    </section>
  );
}
