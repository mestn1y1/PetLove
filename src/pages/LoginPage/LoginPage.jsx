import LoginForm from "../../components/Form/LoginForm/LoginForm";
import pets from "../../Pets/pets";
import PetInfo from "../../components/Pet/PetInfo/PetInfo";
import PetBlock from "../../components/Pet/PetBlock/PetBlock";

import css from "./LoginPage.module.css";
export default function LoginPage() {
  const { name, avatar, birthday, description } = pets[0];
  return (
    <section className={css.containerLoginPage}>
      <div className={css.wrapImagePet}>
        <PetBlock
          images={{
            mobile: "/images/mob/dog_mob.png 1x, /images/mob/dog_mob_x2.png 2x",
            tablet: "/images/tab/dog_tab.png 1x, /images/tab/dog_tab_x2.png 2x",
            desktop: "/images/desc/dog.png 1x, /images/desc/dog_x2.png 2x",
          }}
          alt="Cat"
          className={css.img}
        />
        <PetInfo img={avatar} name={name} desc={description} date={birthday} />
      </div>
      <LoginForm />
    </section>
  );
}
