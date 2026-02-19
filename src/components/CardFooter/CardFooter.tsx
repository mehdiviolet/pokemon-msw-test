import "./CardFooter.scss";

interface CardFooterProps {
  rarity: string;
  icon: string;
}

export default function CardFooter({
  icon,
  rarity = "pokemon_base",
}: CardFooterProps) {
  return (
    <div className="card-footer">
      <span>{rarity.replace("_", " ")}</span>
      <div className="card-footer__icons">
        <div className="card-footer__icon">
          <img src={icon} alt="" />
        </div>
        <div className="card-footer__icon">
          <img src={"/assets/icons/star.svg"} alt="" />
        </div>
      </div>
    </div>
  );
}
