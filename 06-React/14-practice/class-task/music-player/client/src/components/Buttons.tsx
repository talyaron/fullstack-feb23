import React from 'react'
import { Audio } from 'ts-audio';
import Sia from "../music/Sia - Bird Set Free.mp3"

const audio = Audio({
    file: Sia,
    loop: true,
    volume: 0.2,
})

const play = () => {
    debugger
    audio.play()
}

const pause = () => {
    audio.pause()
}

const stop = () => {
    audio.stop()
}


const Buttons = () => {
    // const play = () => { };
    // const pause = () => { };
    return (
        <div className='audio-buttons'>
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
            <button onClick={stop}>Stop</button>
            <p>{Sia}</p>
        </div>
    )
}

export default Buttons


