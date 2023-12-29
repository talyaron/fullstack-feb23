import { FC } from "react"

interface TitleProps {
  title: string
}

const Title: FC<TitleProps> = ({ title }) => {
  return <div>{title}</div>
}

export default Title
