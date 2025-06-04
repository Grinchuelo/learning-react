import { useState } from 'react'
import { Board } from '/src/components/Board.jsx'
import { Square } from '/src/components/Square.jsx'
import { WinnerModal } from '/src/components/WinnerModal.jsx'
import { RestartBtn } from '/src/components/RestartBtn.jsx'
import { TURNS, WINNING_PATRONS } from '/src/constants.jsx'
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  // Chequea si hay ganador y lo settea
  const checkWinner = (board) => {
    for (const patron of WINNING_PATRONS) {
      const [a, b, c] = patron

      if (
      board[a] &&
      board[a] == board[b] &&
      board[a] == board[c]
      ) {
      setWinner(turn)
      confetti()
      } else if (checkEndGame(board)) {
      setWinner(false)
      }
    }
  }
  
  const checkEndGame = (board) => {
    const tie = !board.includes(null)
    return tie;
  }
  
  // Reestablece el tablero
  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // Evitar actualizar el tablero si ya hay una ficha en tal posición
    // Es lo mismo a { if (board[index] != null) }
    if (board[index] || winner) return
    
    // Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Revisar si hay ganador
    checkWinner(newBoard)

    // Cambiar de turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
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
      
      <WinnerModal restartGame={restartGame} winner={winner}></WinnerModal>

      <RestartBtn isWinner={winner} restartGame={restartGame}>Reiniciar</RestartBtn>
    </main>
  )
}

export default App
