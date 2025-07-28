//variants = normal | title | bold
export default function CardInfoText({
  children,
  variant = "normal",
  color = "",
}) {
  return (
    <p
      className={`card-info-text card-info-${variant} ${
        color ? `text-color-type-${color}` : "card-info-text-body"
      }`}
    >
      {children}
    </p>
  );
}
