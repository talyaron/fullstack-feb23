import React, { useState } from "react"


const ColorChanger = () => {
     const [color, setColor] = useState("white");
     const [text,setText] = useState("");

     const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setColor(text);
        console.log(text);
     }

     return (
        <div style={{background: color}}>
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={text}
                onInput={(ev) =>{
                    setText((ev.target as HTMLInputElement).value);
                }
                } />
                <button type="submit">Submit</button>{text}
            </form>

        </div>
     )

}

export default ColorChanger