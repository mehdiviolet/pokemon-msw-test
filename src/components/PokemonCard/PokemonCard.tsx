import type { PokemonDetail, PokemonStatus } from "../../types/Pokemon";
import { CardHeading } from "../CardHeading/CardHeading";
import ImageComponent from "../ImageComponent/ImageComponent";
import CardStats from "../CardStats/CardStats";
import "./PokemonCard.scss";

interface PokemonCardProps {
  pokemon: PokemonDetail;
  status?: PokemonStatus;
  battleError: string | null;
}

export default function PokemonCard({
  pokemon,
  status = "default",
  battleError,
}: PokemonCardProps) {
  {
    if (battleError) {
      return (
        <div className="pokemon-card">
          <div style={{ color: "red", marginTop: "10px" }}>{battleError}</div>
        </div>
      );
    }
  }
  return (
    <div className="pokemon-card">
      <CardHeading
        name={pokemon.typology.name}
        cardNumber={pokemon.card_number}
        status={status}
        iconUrl={pokemon.typology.icon_url}
      />

      <ImageComponent
        name={pokemon.name}
        imageUrl={pokemon.image_url}
        status={status}
        skullIconUrl="/assets/icons/skull.svg"
      />

      <div className="pokemon-card__body">
        <h3 className="pokemon-card__title">{pokemon.name}</h3>
        <p className="pokemon-card__description">
          Usare i suoi poteri gli causa mal di testa, per questo passa il tempo
          cercando di non pensare.
        </p>
      </div>

      <CardStats
        lvValue={pokemon.level}
        vulValue={pokemon.vulnerability.value}
        psValue={pokemon.health_points}
        status={status}
      />

      <div className="pokemon-card__footer">
        <span>POKÉMON BASE</span>
        <div className="pokemon-card__rarity">{/* Rarity indicator */}</div>
      </div>
    </div>
  );
}
