import { useState } from "react";
import "./MainGameBody.css";
import RulesBox from "./RulesBox"

export default function MainGameBody({ currDice, rollDice, resetScore }) {
  const [isHover, setIsHover] = useState();
  const [rules, setRules] = useState(false);
  const mouseEnter = () => {
    setIsHover(true);
  };

  const mouseExit = () => {
    setIsHover(false);
  };

  return (
    <main className="mainSingleDice">
      <div className="singleDice" onClick={rollDice}>
        <img src={`/images/dice_${currDice}.png`} alt="individual dice" />
      </div>
      <div>click on DICE to roll</div>
      <div className="buttons">
        <button
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseExit}
          style={{
            backgroundColor: isHover ? "black" : "white",
            color: isHover ? "white" : "black",
          }}
          onClick={resetScore}
        >
          Reset
        </button>
        <button onClick={() => setRules((prev) => !prev)}>Show Rules</button>
        
      </div>
      {rules && <RulesBox />}
    </main>
  );
}
