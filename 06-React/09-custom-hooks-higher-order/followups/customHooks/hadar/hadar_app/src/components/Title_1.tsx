import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'


export const Title_1 = () => {
    const documentTitle = useDocumentTitle();
  return (
    <div>
        <h1>Component 1</h1>
        <p>Document Title: {documentTitle}</p>
    </div>
  )
}

export default Title_1

