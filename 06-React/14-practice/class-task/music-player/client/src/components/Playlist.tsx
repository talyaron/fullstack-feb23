import React, { useEffect } from 'react'
import { getPlaylist } from '../API/songsApi/getPlaylistApi'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { playlistSelector } from '../features/playlist/usersPlaylistSlice'
import { getUser } from '../API/userApi/registerApi'

const Playlist = async () => {

    const dispatch = useDispatch()
    const user_id = await getUser();
    console.log(user_id)
    useEffect(() => { dispatch(getPlaylist(1)) }, [])
    const playlist = useAppSelector(playlistSelector)
    return (
        <div>
            {playlist.map((song) => { return <p key={song.song_id}>{song.artist} {song.img_src} {song.src} {song.title}</p> })}
        </div>
    )
}

export default Playlist