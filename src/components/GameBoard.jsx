

const gameBoard = [
  [null , null , null],
  [null , null , null],
  [null , null , null],
]

export default function GameBoard( {currSelectPlayer , turns} ){
  let gameBoardCurr = gameBoard

  for(const turn of turns){
    const {square , player} = turn ;
    const {row , col} = square;

    gameBoardCurr[row][col] = player;
  }

  // const [currGameBoard , setCurrGameBoard] = useState(gameBoard)

  // function handelSymbol(rowIndex,colIndex){
  //   setCurrGameBoard((prevGameBoard) => {
  //     const updateGameBoard = [...prevGameBoard.map(arr => [...arr])]
  //     updateGameBoard[rowIndex][colIndex] = activeSymbol
  //     return updateGameBoard
  //   })

  //   currSelectPlayer()
  // }

  return (
    <ol id="game-board">
      {gameBoardCurr.map((row,rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol , colIndex) => (
              <li key={colIndex}>
                <button onClick={() => currSelectPlayer(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}