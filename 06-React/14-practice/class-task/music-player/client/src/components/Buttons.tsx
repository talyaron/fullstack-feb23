import React from 'react'
import { Audio } from 'ts-audio';
import { Song } from '../API/songsApi/getSongApi';
// import Sia from "../music/Sia - Bird Set Free.mp3"




const Buttons = ({ src, artist, title, genre }: Song) => {
    const audio = Audio({
        file: src,
        loop: true,
        volume: 0.2,
    })

    const play = () => {
        audio.play()
    }

    const pause = () => {
        audio.pause()
    }

    const stop = () => {
        audio.stop()
    }
    return (
        <div className='audio-buttons'>
            <h2>{artist}</h2>
            <p>{title}</p>
            <p>{genre}</p>
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}

export default Buttons


