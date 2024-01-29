import React, { useEffect, useState } from 'react'
import { Song, getAllSong } from '../../API/songsApi/getSongApi'
import Buttons from '../../components/Buttons'
import { addSong, removeSong } from '../../API/songsApi/addSongApi'
import { useDispatch } from 'react-redux'
import { addNewSong } from '../../features/playlist/usersPlaylistSlice'
import { getUser } from '../../API/userApi/registerApi'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user_id, setUserId] = useState(0)

    const [allSongs, setAllSongs] = useState<Song[]>([])
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
    const handleAddSong = async (song_id: number, title: string, artist: string, img_src: string, src: string, genre: string) => {
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
    const handleRemoveSong = async (song_id: number, title: string, artist: string, img_src: string, src: string, genre: string) => {
        try {
            const removeSongFromPlaylist = await removeSong(user_id, song_id)
            console.log(removeSongFromPlaylist)
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
    const getAllSongFromDB = async () => {
        try {
            setAllSongs(await getAllSong())
        } catch (error) {

        }
    }
    useEffect(() => {
        getUserID();
        getAllSongFromDB()
    }, []);
    return (
        <div>
            {allSongs.map((song) => {
                return <div className='button-card' key={song.song_id}>
                    <img src={song.img_src} alt="" />
                    <Buttons key={song.song_id} src={song.src} artist={song.artist} title={song.title} genre={song.genre} song_id={song.song_id} img_src={song.img_src} />
                    <button onClick={() => handleAddSong(song.song_id, song.title, song.artist, song.img_src, song.src, song.genre)}>add Song</button>
                    <button onClick={() => handleRemoveSong(song.song_id, song.title, song.artist, song.img_src, song.src, song.genre)}>remove Song</button>
                </div>
            })}
        </div>
    )
}
export default HomePage