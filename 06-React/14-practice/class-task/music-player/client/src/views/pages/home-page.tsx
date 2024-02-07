import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addSong, removeSong } from '../../API/songsApi/addSongApi'
import { Song, getAllSong } from '../../API/songsApi/getSongApi'
import { getUser } from '../../API/userApi/registerApi'
import Buttons from '../../components/Buttons'
import { addNewSong, removeSongFromState } from '../../features/playlist/usersPlaylistSlice'
import { Button } from '@mui/material'

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
            await removeSong(user_id, song_id)
            dispatch(removeSongFromState({
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
        <div className='songs-wrapper'>
            {allSongs.map((song, i) => {
                return <div className='card' key={i}>
                    <img src={song.img_src} alt="" />
                    <Buttons key={song.song_id} src={song.src} artist={song.artist} title={song.title} genre={song.genre} song_id={song.song_id} img_src={song.img_src} />
                    <Button variant="contained" color="primary" onClick={() => handleAddSong(song.song_id, song.title, song.artist, song.img_src, song.src, song.genre)}>add Song</Button>
                    <Button variant="contained" color="primary" onClick={() => handleRemoveSong(song.song_id, song.title, song.artist, song.img_src, song.src, song.genre)}>remove Song</Button>
                </div>
            })}
        </div>
    )
}
export default HomePage