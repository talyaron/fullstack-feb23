import { ChangeEvent, useState } from "react"
import useTimer from "../../../hooks/useTimer"


const OnDependence = () => {
    const [text, setText] = useState("")
    const timer = useTimer(text)
   
    const handleInputChange=(event: ChangeEvent<HTMLInputElement>)=>{
        try {
            setText(event.target.value)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
    <h1>On dependency</h1>
    <input type="text" onChange={handleInputChange} value={text} placeholder="Set time in seconds" />
    {timer}
    </>
  )
}

export default OnDependence