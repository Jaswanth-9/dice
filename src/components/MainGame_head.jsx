import { useState } from "react";
import "./MainGame_head.css";

export default function MainGame_head() {
  const number = [1, 2, 3, 4, 5, 6];
  const [selectNumber, setselectNumber] = useState();

  return (
    <main className="MainGame_head">
      <div className="score">
        <h1>0</h1>
        <h3>Total Score</h3>
      </div>
      <div className="guessNumber">
        <div className="numberBoxMain">
          {number.map((value, i) => (
            <div className="numberBox"
              key={i}
              onClick={() => setselectNumber(value)}
              style={{
                backgroundColor: value === selectNumber ? "black" : "white",
                color: value === selectNumber ? "white" : "black",
              }}
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
