import useDocumentTitle from "../../../hooks/useDocumentTitle"

const TitleOne = () => {
    const {title} = useDocumentTitle()

   
  return (
    <div>the title {title}</div>
  )
}

export default TitleOne