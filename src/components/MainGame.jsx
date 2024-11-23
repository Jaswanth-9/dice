import "./MainGame.css";
import MainGame_head from "./MainGame_head";
import MainGameBody from "./MainGameBody";
import { useState } from "react";

export default function MainGame() {
  const [score, setscore] = useState(0);
  const [selectNumber, setselectNumber] = useState();
  const [currDice, setcurrDice] = useState(1);
  const [error, seterror] = useState("");

  const genRandNumb = () => {
    return Math.ceil(Math.random() * 6);
  };

  const resetScore = () => {
    setscore(0);
  }

  const rollDice = () => {

    if(!selectNumber){
      seterror("Please select a number ")
      return;
    }

    const randNumb = genRandNumb();
    setcurrDice((prev) => randNumb);


    if (selectNumber === currDice) {
      setscore((prev) => prev + 1);
    } else {
      setscore((prev) => prev - 1);
    }

    setselectNumber(undefined);
  };

  return (
    <>
      {/* eslint-disable-next-line */}
      <MainGame_head
        selectNumber={selectNumber}
        setselectNumber={setselectNumber}
        score = {score}
        error = {error}
        seterror = {seterror}
      />
      <MainGameBody 
      currDice={currDice} 
      rollDice={rollDice} 
      resetScore = {resetScore}/>
    </>
  );
}
