import React, { useState } from 'react'




const colorinput = () => {

    const [color,setColor]= useState<String>("white")
    const [text,setText]=useState<String>("")


    const handleSubmit= (ev:any)=>{
        ev.preventDefault()
        setColor(text)
    }

    const handleSubmit2=(ev:any)=>{
        ev.preventDefault()
        setColor(window.text2.value)
    }

  return (
    <div>
        <div style={{backgroundColor:color }}>

            <form onSubmit={handleSubmit}>
            <input onInput={(ev)=>{setText(ev.target.value)}} type="text" />
            <button type='submit'>Change</button>
            </form>
        </div>
        <form style={{backgroundColor:color}} onSubmit={handleSubmit2} >
            <input name='colortext' type="text" id='text2' />
            <button type='submit'>change</button>
        </form>
    </div>
    )
}

export default colorinput
