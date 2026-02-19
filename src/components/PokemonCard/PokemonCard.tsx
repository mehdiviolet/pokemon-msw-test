import type { CardStates } from "../../types/Pokemon";
import CardFooter from "../CardFooter/CardFooter";
import CardHeading from "../cardheading/CardHeading";
import CardStats from "../CardStats/CardStats";
import ImageComponent from "../ImageComponent/ImageComponent";
import "./PokemonCard.scss";

interface PokemonCardProps {
  title: string;
  description: string;
  stateCard?: CardStates;
}

const PokemonCard = ({
  title = "Psy...",
  description = "desc...",
  stateCard,
}: PokemonCardProps) => {
  return (
    <div className="pokemon-card">
      <CardHeading stateCard={stateCard} />
      <ImageComponent
        states={stateCard}
        imgName="img"
        imgUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png"
      />

      <div className="pokemon-card__body">
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <CardStats lvValue={15} psValue={100} hpValue={20} status={stateCard} />
      <CardFooter icon="/assets/icons/water_drop.svg" rarity="pokemon_base" />
    </div>
  );
};

export default PokemonCard;
