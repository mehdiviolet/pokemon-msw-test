import React from "react";
import BattleButton from "../BattleButton/BattleButton";
import { BattleProgressBar } from "../BattleProgressBar/BattleProgressBar";
import { useBattle } from "../../hooks/useBattle";

export default function BattleWidget({ status, id, pokemon }) {
  const {
    startBattle,
    status,
    progress,
    battleResultHp,
    error: battleError,
  } = useBattle();

  const getButtonText = () => {
    switch (status) {
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

  return (
    <>
      <BattleProgressBar isVisible={true} progress={progress} />
      <BattleButton disabled={false} onClick={() => id && startBattle(id)}>
        {getButtonText()}
      </BattleButton>
    </>
  );
}
