import useDocumentTitle from '../hooks/useDocumentTitle'

const ButtonTitle = () => {
    const { title, getTitle } = useDocumentTitle()

    
    return (
        <>
        <button onClick={getTitle}>press</button>
        <p>{title}</p>
        </>
        )
}

export default ButtonTitle