export function Button ({children, setEnableEffect}) {
    function handleClick() {
        setEnableEffect((prev) => !prev);
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}