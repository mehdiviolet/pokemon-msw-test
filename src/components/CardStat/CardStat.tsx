import type { CardStates } from "../../types/Pokemon";
import "./CardStat.scss";

interface CartStatProps {
  label: "LV" | "PS" | "VUL";
  value: number;
  state?: CardStates;
}
export const ICON_SKULL = "/assets/icons/skull.svg";
const ECOICON = "/assets/icons/eco.svg";
const EQUALIZER = "/assets/icons/equalizer.svg";
const FAVORITE = "/assets/icons/favorite.svg";
const FAVORITE_EMPTY = "/assets/icons/favorite-empty.svg";

export default function CardStat({ value, label, state }: CartStatProps) {
  const getIcon = () => {
    if (label === "LV") return EQUALIZER;
    if (label === "VUL") return ECOICON;
    else {
      switch (state) {
        case "warning":
          return FAVORITE_EMPTY;
        case "dead":
          return ICON_SKULL;
        default:
          return FAVORITE;
      }
    }
  };

  return (
    <div className={`card-stat card-stat--${state}`}>
      <img src={getIcon()} alt={label} className="card-stat__img" />
      <span>
        {label}.<span>{value}</span>
      </span>
    </div>
  );
}
