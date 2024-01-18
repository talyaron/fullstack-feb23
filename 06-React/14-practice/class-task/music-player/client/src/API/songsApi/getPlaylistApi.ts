import axios from "axios"
import { Song } from "./getSongApi"

export const getPlaylist = async (user_id: number): Promise<Song[]> => {
  try {
    const response = await axios.get(`/API/songs/get-user-playlist/${user_id}`)
    if (!response || response === undefined)
      throw new Error(`Could not get playlist from db`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
