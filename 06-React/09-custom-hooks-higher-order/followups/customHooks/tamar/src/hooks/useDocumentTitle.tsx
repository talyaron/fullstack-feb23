import { useState } from 'react'

const useDocumentTitle = (initial = "") => {
    const [title, setTitle] = useState(initial)

    const handleAddTitle = () => {
        setTitle("This is my Title")
    }

    return (
        { title, handleAddTitle }
    )
}

export default useDocumentTitle