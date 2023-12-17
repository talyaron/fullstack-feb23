import { useEffect, useState } from "react"

// # medium

// 2. create a custom hook that is called useTimer: and it provides a timer logic. the timer should be able to be started, stoped, and reset, and have minutes, seconds and miliseconds.
//    create two components that use the timer logic: one should be started on mount, the other should not.



const useTimer = (dependency:any) => {
    const [count, setCount] = useState(0);
    const [onBtnClick, setOnBtnClick] = useState(false);

    const handleBtnClick =()=>{
        setOnBtnClick(prevBtnClick => !prevBtnClick)
    }

    useEffect(()=>{
        const handleCount = setInterval(()=>{
            setCount(prevCount => prevCount + 1000);
        },1000)
        return()=> clearInterval(handleCount)
    },[dependency,setOnBtnClick])


  return (
    <>
    <button onClick={handleBtnClick}>{onBtnClick ? 'Pause' : 'Start'}</button>
    {onBtnClick && (<>
    <p>Time in minutes: {Math.floor(count / 60000)}</p>
    <p>Time in seconds: {Math.floor(count / 10000)} </p>
    <p>Time in miliseconds: {count}</p></>)}
    </>
  )
}

export default useTimer


