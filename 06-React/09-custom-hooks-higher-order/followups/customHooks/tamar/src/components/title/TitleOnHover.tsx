import useDocumentTitle from '../../hooks/useDocumentTitle'

const TitleOnHover = () => {
    const { title, handleAddTitle } = useDocumentTitle()

    return (
        <div>{title}
            <button onMouseEnter={handleAddTitle}>TitleOnHover</button>
        </div>
    )
}

export default TitleOnHover