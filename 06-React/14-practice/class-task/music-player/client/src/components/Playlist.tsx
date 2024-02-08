import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { removeSong } from "../API/songsApi/addSongApi"
import { getPlaylist } from "../API/songsApi/getPlaylistApi"
import { getUser } from "../API/userApi/registerApi"
import { useAppSelector } from "../app/hooks"
import {
    playlistSelector,
    removeSongFromState,
} from "../features/playlist/usersPlaylistSlice"
import Buttons from "./Buttons"
const Playlist = () => {
    const [user_id, setUserId] = useState(0)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getUserID = async () => {
        try {
            const userObject = await getUser()
            if (!userObject) navigate("/")
            const userId = userObject.results.user_id
            if (!userId) throw new Error("User not found")
            setUserId(userId)
        } catch (error) {
            console.error(error)
        }
    }
    const handleRemoveSong = async (
        song_id: number,
        title: string,
        artist: string,
        img_src: string,
        src: string,
        genre: string,
    ) => {
        try {
            const removeSongFromPlaylist = await removeSong(user_id, song_id)
            console.log(removeSongFromPlaylist)
            dispatch(
                removeSongFromState({
                    song_id: song_id,
                    title: title,
                    artist: artist,
                    img_src: img_src,
                    src: src,
                    genre: genre,
                }),
            )
        } catch (error) {
            console.error(error)
        }
    }
    const playlist = useAppSelector(playlistSelector)
    useEffect(() => {
        getUserID()
        dispatch(getPlaylist(user_id))
    }, [user_id])

    return (
        <div className="songs-wrapper">

            {playlist.length === 0 ? <h2>there is no liked songs yet</h2> : playlist.map((song, i) => {
                return (
                    <div className="card" key={i}>
                        <img className="img-card" src={song.img_src} alt="" />
                        <Buttons
                            src={song.src}
                            artist={song.artist}
                            title={song.title}
                            genre={song.genre}
                            song_id={song.song_id}
                            img_src={song.img_src}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() =>
                                handleRemoveSong(
                                    song.song_id,
                                    song.title,
                                    song.artist,
                                    song.img_src,
                                    song.src,
                                    song.genre,
                                )
                            }
                        >
                            remove Song
                        </Button>
                    </div>
                )
            })}
        </div>

    )
}

export default Playlist
