import React,{FC} from 'react'

interface ParagraphProps{
    color: string,
    children: React.ReactNode
}

const Paragraph:FC<ParagraphProps> = ({color,children}) => {
  return (
    <h1 style={{color}}>{children}</h1>
  )
}

export default Paragraph