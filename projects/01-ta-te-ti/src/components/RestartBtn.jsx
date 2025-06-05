export const RestartBtn = ({children, restartGame, setBoard, setTurn, setWinner}) => {
    const handleClick = () => {
        restartGame(setBoard, setTurn, setWinner)
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}