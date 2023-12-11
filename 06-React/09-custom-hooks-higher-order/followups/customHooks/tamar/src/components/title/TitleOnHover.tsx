import useDocumentTitle from '../../hooks/useDocumentTitle'

const TitleOnHover = () => {
    const { onOff, title, handleAddTitle } = useDocumentTitle()

    return (
        <div>
            {onOff ? <h1>{title}</h1> : null}

            <button onMouseEnter={handleAddTitle}>TitleOnHover</button>
        </div>
    )
}

export default TitleOnHover