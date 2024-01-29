import axios from "axios"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../app/hooks"
import {
  addNewSong,
  playlistSelector,
} from "../../features/playlist/usersPlaylistSlice"
import { Song } from "./getSongApi"

export const addSong = async (
  user_id: number,
  song_id: number,
): Promise<Song> => {
  try {
    console.log(user_id, song_id)
    const response = await axios.post(`/API/songs/add-song`, {
      user_id,
      song_id,
    })
    if (!response || response === undefined)
      throw new Error(`Could not get song from db`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const removeSong = async (
  user_id: number,
  song_id: number,
): Promise<Song> => {
  try {
    console.log(user_id, song_id)
    const response = await axios.post(`/API/songs/remove-song`, {
      user_id,
      song_id,
    })
    if (!response || response === undefined)
      throw new Error(`Could not remove song from db`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
// DELETE FROM `multi_musix`.`users_playlists` WHERE (`users_playlists_id` = '6');
