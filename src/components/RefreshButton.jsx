import '../styles/refreshButton.css'
export function RefreshButton() {
    const handleClick = () => {
        location.reload()
    }

    return <button id="reload" onClick={handleClick}>↩</button>
}