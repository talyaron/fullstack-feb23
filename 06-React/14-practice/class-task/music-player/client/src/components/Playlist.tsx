import React, { MouseEventHandler, useEffect, useState } from 'react'
import { getPlaylist } from '../API/songsApi/getPlaylistApi'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { addNewSong, playlistSelector } from '../features/playlist/usersPlaylistSlice'
import { getUser } from '../API/userApi/registerApi'
import { useNavigate } from 'react-router-dom'
import Buttons from './Buttons'
import { addSong } from '../API/songsApi/addSongApi'
const Playlist = () => {
    const [user_id, setUserId] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getUserID = async () => {
        try {
            const userObject = await getUser();
            if (!userObject) navigate("/")
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
    const handleAddSongClick = async (song_id: number, title: string, artist: string, img_src: string, src: string, genre: string) => {
        try {
            const songToPlaylist = await addSong(user_id, song_id)
            console.log(songToPlaylist)
            dispatch(addNewSong({
                song_id: song_id,
                title: title,
                artist: artist,
                img_src: img_src,
                src: src,
                genre: genre
            }))
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            {playlist.map((song) => {
                return <div className='button-card' key={song.song_id}>
                    <img src={song.img_src} alt="" />
                    <Buttons key={song.song_id} src={song.src} artist={song.artist} title={song.title} genre={song.genre} song_id={song.song_id} img_src={song.img_src} />
                </div>
            })}
        </div>
    )
}

export default Playlist