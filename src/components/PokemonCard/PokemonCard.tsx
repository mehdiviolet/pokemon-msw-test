import { mockItems } from "../../mocks/data";
import type { CardStates } from "../../types/Pokemon";
import CardFooter from "../CardFooter/CardFooter";
import CardHeading from "../cardheading/CardHeading";
import CardStats from "../CardStats/CardStats";
import ImageComponent from "../ImageComponent/ImageComponent";
import "./PokemonCard.scss";

import type { PokemonDetail } from "../../types/Pokemon";

interface PokemonCardProps {
  pokemon: PokemonDetail;
  // title: string;
  // description: string;
  stateCard?: CardStates;
}

const PokemonCard = ({
  // title = "Psy...",
  // description = "desc...",
  pokemon,
  stateCard,
}: PokemonCardProps) => {
  return (
    <div className="pokemon-card">
      <CardHeading stateCard={stateCard} />
      <ImageComponent
        states={stateCard}
        imgName="img"
        imgUrl={mockItems[0].image_url}
      />

      <div className="pokemon-card__body">
        <p>{pokemon.name}</p>
        <span>{pokemon.short_description}</span>
      </div>
      <CardStats
        lvValue={pokemon.level}
        psValue={pokemon.vulnerability.value}
        hpValue={pokemon.health_points}
        status={stateCard}
      />
      <CardFooter icon="/assets/icons/water_drop.svg" rarity="pokemon_base" />
    </div>
  );
};

export default PokemonCard;
