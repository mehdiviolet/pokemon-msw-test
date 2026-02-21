import type { CardStates, JobStatus, PokemonDetail } from "../../types/Pokemon";
import BattleButton from "../BattleButton/BattleButton";
import BattleProgressBar from "../BattleProgressBar/BattleProgressBar";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonBattleCard.scss";

interface PokemonBattleCardProps {
  pokemon: PokemonDetail;
  //   stateCard?: CardStates;
  progress: number;
  battleStatus: JobStatus;
  onBattleClick: () => void;
}

export default function PokemonBattleCard({
  pokemon,
  battleStatus,
  // stateCard,
  progress,
  onBattleClick,
  // battleError,
}: PokemonBattleCardProps) {
  const getStatus = (): CardStates => {
    if (pokemon.health_points === 0) return "dead";
    if (pokemon.health_points < 30) return "warning";
    return "default";
  };
  // const {
  //   startBattle,
  //   status: battleStatus,
  //   progress,
  //   // battleResultHp,
  //   // error: battleError,
  // } = useBattle();
  const getButtonText = () => {
    switch (battleStatus) {
      case "running":
      case "queued":
        return "STA COMBATTENDO...";
      case "failed":
        return "SIMULA NUOVAMENTE";
      case "done":
        return pokemon.health_points === 0
          ? "HAI PERSO, RIPROVA!"
          : "VITTORIA, LOTTA ANCORA";
      default:
        return "SIMULA COMBATTIMENTO";
    }
  };

  const isButtonDisabled =
    battleStatus === "queued" || battleStatus === "running";

  return (
    <div className="pokemon-battle-card">
      <PokemonCard
        // title={pokemon.name}
        // description={pokemon.short_description}
        pokemon={pokemon}
        stateCard={getStatus()}
        // battleError={battleError}
      />
      {battleStatus === "idle" ? (
        <p>Tutto è pronto. Inizia la sfida!</p>
      ) : (
        <BattleProgressBar progress={progress} />
      )}
      <BattleButton disabled={isButtonDisabled} onClick={onBattleClick}>
        {getButtonText()}
      </BattleButton>
    </div>
  );
}
