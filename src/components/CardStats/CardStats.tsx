import type { CardStates } from "../../types/Pokemon";
import CardStat from "../CardStat/CardStat";
import "./CardStats.scss";

interface CardStatesProps {
  lvValue: number;
  psValue: number;
  hpValue: number;
  status?: CardStates;
}

export default function CardStats({
  lvValue,
  psValue,
  hpValue,
  status,
}: CardStatesProps) {
  return (
    <div className={`card-stats`}>
      {/* <CardStat label="LV" value={lvValue} /> */}
      <CardStat label="LV" value={lvValue} />
      {/* <CardStat label="VUL" value={psValue} /> */}
      <CardStat label="VUL" value={psValue} />
      <CardStat label="PS" value={hpValue} state={status} />
    </div>
  );
}
