import { useState } from "react";
import MainGame from "./components/MainGame";
import StartGame from "./components/StartGame";

function App() {
  const [playNow, setplayNow] = useState(false);

  const togglePlayNow = () => {
    setplayNow((prev) => !prev);
  };

  return <>{playNow ? <MainGame /> : <StartGame toggle={togglePlayNow} />}</>;
}

export default App;
