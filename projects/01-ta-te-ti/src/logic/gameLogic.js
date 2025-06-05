import { TURNS, WINNING_PATRONS } from '/src/constants.jsx'
import confetti from 'canvas-confetti'

export const checkWinner = (board, setWinner, turn, checkEndGame) => {
    for (const patron of WINNING_PATRONS) {
        const [a, b, c] = patron

        if (
            board[a] &&
            board[a] == board[b] &&
            board[a] == board[c]
        ) {
            setWinner(turn)
            confetti()
            return
        } else if (checkEndGame(board)) {
            setWinner(false)
        }
    }
}

export const checkEndGame = (board) => {
    const tie = !board.includes(null)
    return tie;
}

export const restartGame = (setBoard, setTurn, setWinner) => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
}