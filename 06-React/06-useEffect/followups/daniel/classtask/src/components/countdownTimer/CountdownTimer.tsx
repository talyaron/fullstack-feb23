import { useEffect, useState } from 'react'

// ## Easy

// Create a CountdownTimer component that displays a countdown timer starting from a given initial value, and stops at 0. Use the useEffect hook to update the displayed time every second.

// # Expectations

// 1.  Display the countdown timer, starting from the given initial value.
// 2.  Update the timer every second using useEffect.
// 3.  Stop the timer when it reaches 0.
// 4.  Display the following text as the timer counts down: "Time Remaining: X"
// 5.  Start the timer when the component mounts.
// 6.  Stop the timer when the component unmounts.

const CountdownTimer = () => {

    const [countDown, setCountDown] = useState(13);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCountDown(prevCountDown=>{
                if(prevCountDown > 0){
                    return prevCountDown -1
                }else{
                    return prevCountDown
                }
            })
        },1000)
        return()=> clearInterval(intervalId)
    },[])

  return (
    <p>Time Remaining: {countDown}</p>
  )
}

export default CountdownTimer