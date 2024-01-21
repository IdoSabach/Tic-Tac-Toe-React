import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { useState } from "react";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [currPlayer, setCurrPlayer] = useState("X");

  function handlePlayer(rowIndex, colIndex) {
    setCurrPlayer((curr) => (curr === "X" ? "O" : "X"));
    setGameTurn((prevTurn) => {
      let currentPlayer = "X";

      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentPlayer = "O";
      }
      const updateTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updateTurn;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"Player 1"}
            symbol={"X"}
            isActive={currPlayer === "X"}
          />
          <Player
            name={"Player 2"}
            symbol={"O"}
            isActive={currPlayer === "O"}
          />
        </ol>
        <GameBoard
          currSelectPlayer={handlePlayer}
          turns={gameTurn}
        />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
