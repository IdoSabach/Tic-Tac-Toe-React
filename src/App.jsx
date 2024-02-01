import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveWinner(gameBoardCurr , players){
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const first = gameBoardCurr[combination[0].row][combination[0].column];
    const second = gameBoardCurr[combination[1].row][combination[1].column];
    const three = gameBoardCurr[combination[2].row][combination[2].column];

    if (first && first === second && first === three) {
      winner = players[first];
    }
  }
  return winner
}

function App() {
  const [players , setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  })
  const [gameTurn, setGameTurn] = useState([]);

  let gameBoardCurr =[ ...gameBoard.map(arr => [...arr])];

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoardCurr[row][col] = player;
  }

  const currPlayer = deriveActivePlayer(gameTurn);
  const winner = deriveWinner(gameBoardCurr , players)
  const hasDraw = gameTurn.length === 9 && !winner

  function handlePlayer(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updateTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updateTurn;
    });
  }

  function handelRestart(){
    setGameTurn([]);
  }

  function handelChangeName(symbol , newName){
    setPlayers(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol] : newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"Player 1"}
            symbol={"X"}
            isActive={currPlayer === "X"}
            onChangeName={handelChangeName}
          />
          <Player
            name={"Player 2"}
            symbol={"O"}
            isActive={currPlayer === "O"}
            onChangeName={handelChangeName}
          />
        </ol>
        {( winner || hasDraw ) && <GameOver winner={winner} onRestart={handelRestart}/>}
        <GameBoard currSelectPlayer={handlePlayer} board={gameBoardCurr} />
      </div>
      <Log turns={gameTurn} />

      {/* <footer id="footer">
        <div>Build by Ido Sabach <button><a href=""></a></button></div>
      </footer>
      <footer id="footer">
        <div>Build by Ido Sabach <button><a href=""></a></button></div>
      </footer>
      <footer id="footer">
        <div>Build by Ido Sabach <button><a href=""></a></button></div>
      </footer> */}
    </main>
  );
}

export default App;
