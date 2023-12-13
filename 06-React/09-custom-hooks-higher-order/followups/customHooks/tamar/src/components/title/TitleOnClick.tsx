import useDocumentTitle from "../../hooks/useDocumentTitle"

function TitleOnClick() {
    const { onOff, title, handleAddTitle } = useDocumentTitle()

    return (
        <div>
            {onOff ? <h1>{title}</h1> : null}
            <button onClick={handleAddTitle}>titleOnClick</button>
        </div>
    )
}

export default TitleOnClick