import useDocumentTitle from "../../hooks/useDocumentTitle"

function TitleOnClick() {
    const { title, handleAddTitle } = useDocumentTitle()

    return (
        <div>{title}
            <button onClick={handleAddTitle}>titleOnClick</button>
        </div>
    )
}

export default TitleOnClick