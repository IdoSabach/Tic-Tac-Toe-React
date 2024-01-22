



export default function GameBoard( {currSelectPlayer , board} ){
  

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
      {board.map((row,rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol , colIndex) => (
              <li key={colIndex}>
                <button onClick={() => currSelectPlayer(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}