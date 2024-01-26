import React, { useEffect, useState } from 'react'
import { getPlaylist } from '../API/songsApi/getPlaylistApi'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { playlistSelector } from '../features/playlist/usersPlaylistSlice'
import { getUser } from '../API/userApi/registerApi'
import { useNavigate } from 'react-router-dom'

const Playlist = () => {
    const [user_id, setUserId] = useState(0)
    const dispatch = useDispatch()
    const getUserID = async () => {
        try {
            const userObject = await getUser();
            const userId = userObject.results.user_id;
            if (!userId) throw new Error("User not found")
            setUserId(userId)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getUserID()
        dispatch(getPlaylist(user_id))
    }, [user_id])
    const playlist = useAppSelector(playlistSelector)
    return (
        <div>
            {playlist.map((song) => { return <p key={song.song_id}>{song.artist} {song.img_src} {song.src} {song.title}</p> })}
        </div>
    )
}

export default Playlist