import { Audio } from 'ts-audio';
import { Song } from '../API/songsApi/getSongApi';
import { Button } from '@mui/material';

const Buttons = ({ song_id, title, artist, img_src, src, genre }: Song) => {
    const audio = Audio({
        file: src,
        loop: true,
        volume: 0.2,
        autoPlay: false,
        preload: true,

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
            <Button variant="contained" color="primary" onClick={play}>Play</Button>
            <Button variant="contained" color="primary" onClick={pause}>Pause</Button>
            <Button variant="contained" color="primary" onClick={stop}>Stop</Button>
        </div>
    )
}

export default Buttons


