import "./MainGame_head.css";

export default function MainGame_head({
  selectNumber,
  setselectNumber,
  score,
  error,
  seterror
}) {
  const number = [1, 2, 3, 4, 5, 6];

  const numErrorHandler = (value) => {
    setselectNumber(value)
    seterror("")
  }

  return (
    <main className="MainGame_head">
      <div className="score">
        <h1>{score}</h1>
        <h3>Total Score</h3>
      </div>
      <div className="guessNumber">
        <p1>{error}</p1>
        <div className="numberBoxMain">
          {number.map((value, i) => (
            <div
              className="numberBox"
              key={i}
              style={{
                backgroundColor: value === selectNumber ? "black" : "white",
                color: value === selectNumber ? "white" : "black",
              }}
              onClick={() =>numErrorHandler(value)}
            >
              {value}
            </div>
          ))}
        </div>
        <p>select number</p>
      </div>
    </main>
  );
}
