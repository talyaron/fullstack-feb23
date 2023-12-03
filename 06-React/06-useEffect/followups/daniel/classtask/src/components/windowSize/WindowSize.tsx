import { FC, useEffect, useState } from 'react'

// ## medium

// Create a WindowSize component that listens to the window's resize event and displays the current window size. Use the useEffect hook to add and remove the event listener on mount and unmount, respectively. This exercise will help you understand how to use the useEffect hook for managing side effects like event listeners and the importance of cleanup functions.

// # Expectations

// 1.  Listen to the window's resize event.
// 2.  Display the current window size.
// 3.  Add the event listener when the component mounts.
// 4.  Remove the event listener when the component unmounts.


interface sizeProps{
    width: number,
    height: number
}

const Browser:FC<sizeProps>=({width, height})=>{
    return(
        <div style={{width:width / 4, height:height / 4}} />
    )
}

const WindowSize = () => {
    const [windowSize, setwindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(()=>{
        const onResize=()=>{
            setwindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize",onResize)

        return()=>{window.removeEventListener("resize", onResize)}
    },[])
  return (
    <>
    <p>Window width: {windowSize.width}</p>
    <p>Window height: {windowSize.height}</p>
    <Browser width={windowSize.width} height={windowSize.height} />
    </>
  )
}

export default WindowSize