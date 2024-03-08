import React, { useState } from 'react'

const Color = () => {
    const [text, setText] = useState("")
    const [color, setColor] = useState("")

    const[color2, setColor2] = useState("")

    const handleSetColor = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        setColor(text)
    }

    const handleSetColor2 = (ev:React.FormEvent<HTMLFormElement>)=>{
        ev.preventDefault()
setColor2(window.color2.value)
    }
    return (
        <div>
            <form onSubmit={handleSetColor} style={{ backgroundColor: color }}>
                <input type="text" name="color" id="color" value={text} onInput={(ev) => { setText((ev.target as HTMLInputElement).value) }} />
                <button type="submit">PICK</button>
            </form>

            <form onSubmit={handleSetColor2} style={{ backgroundColor: color2 }}>
                <input type="text" name="color2" id="color2"/>
                <button type="submit">PICK</button>

            </form>
        </div>
    )
}

export default Color