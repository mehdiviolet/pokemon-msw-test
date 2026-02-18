import type { PokemonStatus } from "../../types/Pokemon";
import "./CardStat.scss";

interface CardStat {
  label: "LV" | "VUL" | "PS";
  value: number;
  status?: PokemonStatus;
}

export default function CardStat({ status, label = "LV", value }: CardStat) {
  const getIcon = () => {
    if (label === "LV") return "/assets/icons/equalizer.svg";
    if (label === "VUL") return "/assets/icons/eco.svg";
    if (label === "PS") {
      if (status === "isWarning") {
        return "/assets/icons/favorite-empty.svg";
      }
      if (status === "isDefeated") {
        return "/assets/icons/skull.svg";
      } else {
        return "/assets/icons/favorite.svg";
      }
    }
  };
  return (
    <div
      className={`card-stat ${label === "PS" ? `card-stat--${status}` : ""}`}
    >
      <img src={getIcon()} alt={label} />
      <span>{`${label}-${value}`}</span>
    </div>
  );
}
