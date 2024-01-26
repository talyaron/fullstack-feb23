import axios from "axios"

export interface Song {
  song_id: number | null
  title: string
  artist: string
  img_src: string
  src: string
  genre: string
}

export const getSong = async (song_id: number): Promise<Song> => {
  try {
    const response = await axios.get(`/API/songs/get-song/${song_id}`)
    if (!response || response === undefined)
      throw new Error(`Could not get song from db`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
