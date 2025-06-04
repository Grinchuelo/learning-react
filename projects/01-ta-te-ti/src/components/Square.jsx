export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = isSelected
        ? 'square isSelected'
        : 'square'

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            <span>
                {children}
            </span>
        </div>
    )
}
