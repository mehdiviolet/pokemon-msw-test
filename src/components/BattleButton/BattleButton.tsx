import type { ReactNode } from "react";
import "./BattleButton.scss";

interface BattleButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export default function BattleButton({
  children,
  disabled,
  onClick,
}: BattleButtonProps) {
  return (
    <button className="battle-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
