import type React from "react";
import "./BattleButton.scss";

interface BattleButton {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
}

export default function BattleButton({
  children,
  disabled,
  onClick,
}: BattleButton) {
  return (
    <button className="battle-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
