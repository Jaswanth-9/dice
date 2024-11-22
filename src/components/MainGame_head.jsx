import "./MainGame_head.css";

export default function MainGame_head() {
  return (
    <main>
      <div className="score">
        <h1>0</h1>
        <h3>Total Score</h3>
      </div>
      <div className="guessNumber"></div>
    </main>
  );
}
