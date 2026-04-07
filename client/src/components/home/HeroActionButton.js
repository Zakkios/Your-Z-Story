const HeroActionButton = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  title,
}) => (
  <button
    type="button"
    className={`homepage-cta homepage-cta--${variant}`}
    onClick={onClick}
    disabled={disabled}
    title={title}
  >
    {label}
  </button>
);

export default HeroActionButton;
