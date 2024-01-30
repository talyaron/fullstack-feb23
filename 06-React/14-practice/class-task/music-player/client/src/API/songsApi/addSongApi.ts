import axios from "axios"
import { Song } from "./getSongApi"

export const addSong = async (
  user_id: number,
  song_id: number,
): Promise<Song> => {
  try {
    const response = await axios.post(`/API/songs/add-song`, {
      user_id,
      song_id,
    })
    if (!response || response === undefined)
      throw new Error(`Could not get song from db`)
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
    const response = await axios.post(`/API/songs/remove-song`, {
      user_id,
      song_id,
    })
    if (!response || response === undefined)
      throw new Error(`Could not remove song from db`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
