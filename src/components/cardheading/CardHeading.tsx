import type { CardStates } from "../../types/Pokemon";
import Badge from "../badge/Badge";
import "./CardHeading.scss";

// types.ts (o nei rispettivi file)
export interface CardHeadingProps {
  badgeNum?: string;
  stateCard?: CardStates;
  badgeTxt?: string;
  icone?: string;
}

export interface BadgeProps {
  icone: string;
  badgeTxt: string;
}

export default function CardHeading({
  badgeNum = "054",
  stateCard = "default",
  badgeTxt = "Acqua",
  icone = "/assets/icons/water_drop.svg",
}: CardHeadingProps) {
  return (
    <div className={`heading-container ${stateCard}`}>
      <span>N. {badgeNum}</span>
      <Badge icone={icone} badgeTxt={badgeTxt} />
    </div>
  );
}
