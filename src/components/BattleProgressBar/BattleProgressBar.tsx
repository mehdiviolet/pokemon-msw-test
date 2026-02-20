import "./BattleProgressBar.scss";
interface BattleProgressBaProps {
  progress: number;
}

export default function BattleProgressBar({ progress }: BattleProgressBaProps) {
  return (
    <div className="battle-progress">
      <div className="battle-progress__bar">
        <div
          className="battle-progress__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="battle-progress__txt">
        <span>{progress}%</span>
      </div>
    </div>
  );
}
