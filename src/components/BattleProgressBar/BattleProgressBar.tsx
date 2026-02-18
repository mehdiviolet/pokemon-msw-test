import "./BattleProgressBar.scss";

interface BattleProgressBarProps {
  progress: number;
  isVisible: boolean;
}

export const BattleProgressBar = ({
  progress,
  isVisible,
}: BattleProgressBarProps) => {
  return (
    isVisible && (
      <>
        <div className="battle-progress">
          <div className="battle-progress__bar">
            <div
              className="battle-progress__fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="battle-progress__text">
            {`${Math.round(progress)}%`}
          </span>
        </div>
      </>
    )
  );
};
