import icons from "/images/icons.svg";

export const Icons = ({ iconName, className }) => {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`${icons}#icon-${iconName}`} />
    </svg>
  );
};
