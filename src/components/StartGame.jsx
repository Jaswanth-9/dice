import "./StartGame.css";

export default function StartGame() {
    return (
      <>
        <div className="StartGame_main">
          <div className="StartGame_dice">
            <img src="./images/dice.png" alt="main dice" />
          </div>
          <div className="StartGame_text">
            <h1>DICE GAME</h1>
            <button>Play Now</button>
          </div>
        </div>
      </>
    );
  }
  