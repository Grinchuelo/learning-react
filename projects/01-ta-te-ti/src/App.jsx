import { useState } from 'react'
import { Board } from '/src/components/Board.jsx'
import { Square } from '/src/components/Square.jsx'
import { WinnerModal } from '/src/components/WinnerModal.jsx'
import { RestartBtn } from '/src/components/RestartBtn.jsx'
import { TURNS } from '/src/constants.jsx'
import { restartGame, checkWinner, checkEndGame } from '/src/logic/gameLogic.js'

function App() {
  const [board, setBoard] = useState(() => {
    const boardLocalStorage = window.localStorage.getItem('board')
    
    return boardLocalStorage
      ? JSON.parse(boardLocalStorage)
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn')

    return turnLocalStorage
      ? turnLocalStorage
      : TURNS.X
  })
  
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // Evitar actualizar el tablero si ya hay una ficha en tal posición
    // Es lo mismo a { if (board[index] != null) }
    if (board[index] || winner) return
    
    // Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Revisar si hay ganador
    checkWinner(newBoard, setWinner, turn, checkEndGame)

    // Cambiar de turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardar la partida en localStorage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
  }

  return (
    <main className='board'>
      <h1>Ta-Te-Ti</h1>
      <Board board={board} updateBoard={updateBoard}></Board>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      
      <WinnerModal restartGame={restartGame} winner={winner} setBoard={setBoard} setTurn={setTurn} setWinner={setWinner}></WinnerModal>

      <RestartBtn isWinner={winner} restartGame={restartGame} setBoard={setBoard} setTurn={setTurn} setWinner={setWinner}>Reiniciar</RestartBtn>
    </main>
  )
}

export default App
