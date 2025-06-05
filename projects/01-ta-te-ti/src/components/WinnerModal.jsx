import { Square } from '/src/components/Square.jsx'
import { RestartBtn } from '/src/components/RestartBtn.jsx'

export const WinnerModal = ({winner, restartGame, setBoard, setTurn, setWinner}) => {
    return (
        winner != null && (
            <section className='winner'>
                <div className='text'> 
                    <h2>
                        {
                        winner == false
                            ? 'Empate'
                            : 'Ganó'
                        }
                    </h2>
                    
                    <header className='win'>
                        { winner && <Square>{winner}</Square> }
                    </header>
                    
                    <RestartBtn isWinner={winner} restartGame={restartGame} setBoard={setBoard} setTurn={setTurn} setWinner={setWinner}>Jugar de nuevo</RestartBtn>
                </div>
            </section>
        )
    )
}
    