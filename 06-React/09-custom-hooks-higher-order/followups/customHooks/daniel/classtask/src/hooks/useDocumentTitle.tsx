import { useEffect, useState } from "react"


const useDocumentTitle = () => {
    const [title,setTitle] = useState("")
    const [newTitle, setNewTitle] = useState("")

    useEffect(()=>{
        handleTitle();

        return ()=>{
            document.title = title
        }
    },[])

    const handleTitle =()=>{
        setTitle(document.title)
    }
  return {title, handleTitle}
}

export default useDocumentTitle