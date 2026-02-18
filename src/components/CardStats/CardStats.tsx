import type { PokemonStatus } from "../../types/Pokemon";
import CardStat from "../CardStat/CardStat";
import "./CardStats.scss";

interface CardStatsProps {
  lvValue: number;
  vulValue: number;
  psValue: number;
  status?: PokemonStatus;
}

export default function CardStats({
  lvValue,
  vulValue,
  psValue,
  status = "default",
}: CardStatsProps) {
  return (
    <div className="card-stats">
      <CardStat label="LV" value={lvValue} />
      <CardStat label="VUL" value={vulValue} />
      <CardStat label="PS" value={psValue} status={status} />
    </div>
  );
}
