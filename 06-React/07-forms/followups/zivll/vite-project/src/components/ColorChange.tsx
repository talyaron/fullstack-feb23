import React, { useState } from 'react'

const ColorChange = () => {
    const [color, setColor] = useState("")
    const [text, setText] = useState("")
    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (text)
            setColor(text)
    }
    return (
        <div style={{ backgroundColor: color }}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="choose color" value={text} onInput={ev => { setText((ev.target as HTMLInputElement).value); }} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ColorChange