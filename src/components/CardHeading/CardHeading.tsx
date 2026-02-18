import type { PokemonStatus } from "../../types/Pokemon";
import "./CardHeading.scss";

interface CardHeadingProps {
  name: string;
  iconUrl?: string;
  cardNumber?: string;
  status?: PokemonStatus;
}

export const CardHeading = ({
  name,
  iconUrl,
  cardNumber,
  status = "default",
}: CardHeadingProps) => {
  if (!name) return null;

  return (
    <header className={`card-heading card-heading--${status}`}>
      <span className="card-heading__number">N. {cardNumber}</span>
      <div className="card-heading__badge">
        <span>{name}</span>
        {iconUrl && (
          <img src={iconUrl} alt={name} className="card-heading__icon" />
        )}
      </div>
    </header>
  );
};
