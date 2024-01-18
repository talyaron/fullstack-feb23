// userRegister.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Song } from "../../API/songsApi/getSongApi"
import { getPlaylist } from "../../API/songsApi/getPlaylistApi"

// interface Somg {
//   song_id: number | null
//   title: string
//   artist: string
//   img_src: string
//   src: string
//   genre: string
// }

const initialState: Song[] = [
  {
    song_id: null,
    title: "",
    artist: "",
    img_src: "",
    src: "",
    genre: "",
  },
]

const usersPlaylistSlice = createSlice({
  name: "usersPlaylist",
  initialState,
  reducers: {
    // getPlaylist: (state, action: PayloadAction<string>) => {
    //   state =
    // },
    addSong: (state, action) => {
      state.push = action.payload
    },
    removeSong: (state, action) => {
      state.push = action.payload
    },
    getPlaylistFromDB: async (state) => {
      const usersPlaylist: Song[] = [...(await getPlaylist(1))]
      state = [...usersPlaylist]
    },
    // setPassword: (state, action: PayloadAction<string>) => {
    //   state.password = action.payload
    // },
    // resetRegistration: (state) => {
    //   state.username = ""
    //   state.email = ""
    //   state.password = ""
    // },
  },
})

export const { addSong, removeSong, getPlaylistFromDB } =
  usersPlaylistSlice.actions

export const usersPlaylistSelector = (state: RootState) => state

export const usersPlaylistReducer = usersPlaylistSlice.reducer

export type RootState = ReturnType<typeof usersPlaylistReducer>

export default usersPlaylistSlice.reducer
