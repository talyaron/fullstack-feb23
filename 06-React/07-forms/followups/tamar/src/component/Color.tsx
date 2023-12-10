import React, { useState } from 'react'

const Color = () => {
    const [text, setText] = useState<string>("");
    const [color, setColor] = useState<string>("white");
    const [color2, setColor2] = useState<string>("beige")

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (text) setColor(text)
    }

    const handleSubmitUnContrroled = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setColor2(window.text2.value)
    }

    return (
        <>
        //controlled
            <div style={{ backgroundColor: color }}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text" id="text" name="text" value={text}
                        onInput={(ev) => { setText((ev.target as HTMLInputElement).value) }}
                    />
                    <button type="submit">pick-color</button>
                </form>
            </div>
        //uncontrolled
            <div>
                <form style={{ backgroundColor: color2 }} onSubmit={handleSubmitUnContrroled}>
                    <input type="text" id="text2" name="text2" />
                    <button type="submit">pick-color2</button>
                </form>
            </div>
        </>
    )
}

export default Color
