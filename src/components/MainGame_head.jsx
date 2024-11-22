import "./MainGame_head.css";

export default function MainGame_head() {
    const number = [1,2,3,4,5,6];
  return (
    <main className="MainGame_head">
      <div className="score">
        <h1>0</h1>
        <h3>Total Score</h3>
      </div>
      <div className="guessNumber">
        {
            number.map((value, i) => (
                <div key = {i} > {value} </div>
            ))
        }
      </div>
    </main>
  );
}
