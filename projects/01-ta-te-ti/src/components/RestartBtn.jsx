export const RestartBtn = ({children, restartGame}) => {
    const handleClick = () => {
        restartGame()
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}