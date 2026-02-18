import type { PokemonStatus } from "../../types/Pokemon";
import "./ImageComponent.scss";

interface ImageComponentProps {
  status: PokemonStatus;
  name: string;
  imageUrl: string;
  skullIconUrl?: string;
}

export default function ImageComponent({
  status,
  name,
  imageUrl,
  skullIconUrl,
}: ImageComponentProps) {
  return (
    <div className="card-image">
      {status === "isDefeated" && (
        <div className="card-image__skull-overlay">
          <img src={skullIconUrl} alt="Defeated" />
        </div>
      )}
      <img
        src={imageUrl}
        alt={name}
        className={`card-image__img ${status === "isDefeated" ? "card-image__img--defeated" : ""}`}
      />
    </div>
  );
}
