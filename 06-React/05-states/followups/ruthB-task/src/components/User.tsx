import React , {FC, useState} from 'react'
import { UserType } from '../types/userInterface'
import { choosePastelColor } from '../Util/functions'


interface UserProps{
    user: UserType
    handleClickOnUser: (user:any) => void
}

const User:FC<UserProps> = ({user , handleClickOnUser}) => {
    const [counterState , setCounterState] = useState(user.counter)
    const [ctrClicksState , setCtrClicksState] = useState(1)
    const [colorBgState, setColorBgState] = useState("lightGray")

    const handleMinus = () => {
         setCounterState(counterState-1)
        setCtrClicksState (ctrClicksState+1)
        checkIfPassFiveClicks()
    }
    const handlePlus = () => {
        setCounterState(counterState+1)
        setCtrClicksState (ctrClicksState+1)
        checkIfPassFiveClicks()
    }

    const checkIfPassFiveClicks = () => {
        if(ctrClicksState%5 === 0) {
            setColorBgState(choosePastelColor())
        }
    }

  return (
    <div className='userCard' onClick={() => {handleClickOnUser(user)}} style={{background: colorBgState}}>
        <h3>{user.name}</h3>
        <h3>{user.lastName}</h3>
        <button onClick={handleMinus}>-</button>
        <span>{counterState}</span>
        <button onClick={handlePlus}>+</button>
    </div>
  )
}

export default User