import { useState, useEffect } from "react";


const useDocumentTitle = () => {
    document.title= "hadarrrrr"
    const [documentTitle, setDocumentTitle]= useState(document.title)


    useEffect (() => {
        document.title= documentTitle
        
        return () => {
            document.title= documentTitle
        }
    },[documentTitle])

    return documentTitle
}

export default useDocumentTitle;