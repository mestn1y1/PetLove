import css from "./PetBlock.module.css";

export default function PetBlock({ img, name, desc, date }) {
  return (
    <div className={css.petBlockContainer}>
      <div className={css.imgWrap}>
        <img src={img} alt={name} className={css.petImage} />
      </div>
      <div>
        <div className={css.details}>
          <h2 className={css.name}>{name}</h2>
          <p className={css.detailsText}>
            Birthday: <span className={css.date}>{date}</span>
          </p>
        </div>
        <p className={css.description}>{desc}</p>
      </div>
    </div>
  );
}
