export default function BattleProgressBar() {
  return (
    <div className="battle-progress">
      <div className="battle-progress__bar">
        <div className="battle-progress__fill" />
      </div>
      <div className="battle-progress__txt">
        <span>100%</span>
      </div>
    </div>
  );
}
