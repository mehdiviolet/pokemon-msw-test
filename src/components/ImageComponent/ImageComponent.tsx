import type { CardStates } from "../cardheading/CardHeading";
import { ICON_SKULL } from "../CardStat/CardStat";
import "./ImageComponent.scss";

interface ImageComponentProps {
  imgUrl: string;
  states: CardStates;
  imgName: string;
}

const ImageComponent = ({ imgUrl, states, imgName }: ImageComponentProps) => {
  return (
    <div className={`card-image card-image--${states}`}>
      {states === "dead" && (
        <div className="card-image__overlay">
          <img src={ICON_SKULL} alt="Defeated" />
        </div>
      )}
      <img src={imgUrl} alt={imgName} className="card-image__img" />
    </div>
  );
};

export default ImageComponent;
