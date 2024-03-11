import useDocumentTitle from '../hooks/useDocumentTitle'

const Title = () => {
    const { title, getTitle } = useDocumentTitle()
    return (
        <div onMouseEnter={getTitle}>{title}</div>
    )
}

export default Title