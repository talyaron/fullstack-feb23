import { useState } from 'react'

const useDocumentTitle = () => {
    const [title, setTitle] = useState<string>("no title")

    const getTitle = () => {
        setTitle(document.title)

    }
    return { title, getTitle }
}

export default useDocumentTitle