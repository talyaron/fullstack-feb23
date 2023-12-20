
import useDocumentTitle from '../../../hooks/useDocumentTitle'

const TitleTwo = () => {
    const {handleTitle} = useDocumentTitle()
  return (
    <div><button onClick={handleTitle}></button></div>
  )
}

export default TitleTwo