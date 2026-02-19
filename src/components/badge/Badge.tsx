// Badge.tsx
import type { BadgeProps } from "../cardheading/CardHeading";
import "./Badge.scss";

const Badge = ({ icone, badgeTxt }: BadgeProps) => (
  <div className="badge-container">
    <span>{badgeTxt}</span>
    <img src={icone} alt={badgeTxt} />
  </div>
);

export default Badge;
