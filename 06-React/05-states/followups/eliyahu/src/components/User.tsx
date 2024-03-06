import { FC, useState } from 'react'
import { UserCard } from '../types/types'

interface UserProps {
    user: UserCard,
    handleChangeHeader:(name:any)=>void
}

const User: FC<UserProps> = ({ user , handleChangeHeader}) => {

    const handleAddOne = () => {
        setCounter(counter + 1)
        setClickCounter(clickCounter + 1)
    }
    const handleSubOne = () => {
        setCounter(counter - 1)
        setClickCounter(clickCounter + 1)
    }

    const changeColor = () => {
        if (clickCounter == 5) {
            const randomColor = `#` + Math.floor(Math.random() * 16777215).toString(16)
            setBackgroundColor(randomColor)
            setClickCounter(0)
        }
    }

    const [counter, setCounter] = useState(0)
    const [clickCounter, setClickCounter] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState("white")

    changeColor()
    return (
        <>
            <div onClick={()=>{handleChangeHeader(user.name)}} style={{ backgroundColor: backgroundColor, borderRadius: "10px", border: "1px solid gray" }}>
                <div >{user.name}</div>
                <div>
                    <p style={{  borderRadius: "10px" }}>counter:{counter}</p>
                    <button onClick={handleAddOne}>+</button>
                    <button onClick={handleSubOne}>-</button>
                </div>
            </div>
        </>

    )
}

export default User