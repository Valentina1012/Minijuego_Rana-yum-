import '../styles/refreshButton.css'
export default function RefreshButton() {
    const handleClick = () => {
        location.reload()
    }

    return <button id="reload" onClick={handleClick}>↩</button>
}