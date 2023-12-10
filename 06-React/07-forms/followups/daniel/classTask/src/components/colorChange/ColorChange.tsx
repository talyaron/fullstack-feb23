import React, { useState } from 'react'

// ## followup

// 1. create a form that has a controlled input. a user may write a color string in there and after submit the background of the form will change. assume the user always writes a real color.
// 2. do the same with uncontrolled input.


const ColorChange = () => {
    const [color,setColor] = useState("blue");
    const [text, setText] = useState("")

    const [color2, setColor2] = useState("blue")

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        setColor(text)
    };

    const handleSubmitUncontrolled = (ev: React.FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        setColor2(window.color2.value)
    }
    
  return (
    <>
    <form style={{backgroundColor:color}} onSubmit={handleSubmit}>
        <input type="text" value={text} onInput={(ev)=> {
            setText((ev.target as HTMLInputElement).value);
        }} />
        <button type='submit'>submit</button>
        {text}
    </form>
    <form style={{backgroundColor:color2}} onSubmit={handleSubmitUncontrolled}>
        <input type="text" name='color2' id="color2" />
        <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default ColorChange