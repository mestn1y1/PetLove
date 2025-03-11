import LoginForm from "../../components/Form/LoginForm/LoginForm";
import pets from "../../Pets/pets";
import PetBlock from "../../components/Pet/PetBlock/PetBlock";

import css from "./LoginPage.module.css";
export default function LoginPage() {
  const { name, avatar, birthday, description } = pets[0];
  return (
    <section className={css.containerLoginPage}>
      <div className={css.wrapImagePet}>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/mob/dog_mob.png 1x, /images/mob/dog_mob_x2.png 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcSet="/images/tab/dog_tab.png 1x, /images/tab/dog_tab_x2.png 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/images/desc/dog.png 1x, /images/desc/dog_x2.png 2x"
          />
          <img src="/images/desc/dog.png" alt="Dog" className={css.img} />
        </picture>
        <PetBlock img={avatar} name={name} desc={description} date={birthday} />
      </div>
      <LoginForm />
    </section>
  );
}
