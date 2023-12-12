import { useState } from 'react'

const useDocumentTitle = (initial = "") => {
    const [title, setTitle] = useState(initial)
    const [onOff, setOnOff] = useState(false)

    const handleAddTitle = () => {
        setTitle("This is my Title")
        setOnOff((onOff) => !onOff)
    }

    return (
        { title, onOff, handleAddTitle }
    )
}

export default useDocumentTitle