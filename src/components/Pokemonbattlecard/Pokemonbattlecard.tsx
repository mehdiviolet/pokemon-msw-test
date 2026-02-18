import type { PokemonDetail, JobStatus } from "../../types/Pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import { BattleProgressBar } from "../BattleProgressBar/BattleProgressBar";
import BattleButton from "../BattleButton/BattleButton";
import "./PokemonBattleCard.scss";

interface PokemonBattleCardProps {
  pokemon: PokemonDetail;
  battleStatus: JobStatus;
  progress: number;
  onBattleClick: () => void;
  battleError: string | null;
}

export default function PokemonBattleCard({
  pokemon,
  battleStatus,
  progress,
  onBattleClick,
  battleError,
}: PokemonBattleCardProps) {
  const getStatus = () => {
    if (pokemon.health_points === 0) return "isDefeated";
    if (pokemon.health_points < 30) return "isWarning";
    return "default";
  };

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
        pokemon={pokemon}
        status={getStatus()}
        battleError={battleError}
      />
      <BattleProgressBar
        isVisible={battleStatus === "running" || battleStatus === "queued"}
        progress={progress}
      />
      <BattleButton disabled={isButtonDisabled} onClick={onBattleClick}>
        {getButtonText()}
      </BattleButton>
    </div>
  );
}
