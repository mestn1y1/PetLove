import css from "./PetBlock.module.css";

export default function PetBlock({ images, alt, className }) {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={images.mobile} />
      <source media="(max-width: 1279px)" srcSet={images.tablet} />
      <source media="(min-width: 1280px)" srcSet={images.desktop} />
      <img src={images.desktop.split(",")[0]} alt={alt} className={className} />
    </picture>
  );
}
