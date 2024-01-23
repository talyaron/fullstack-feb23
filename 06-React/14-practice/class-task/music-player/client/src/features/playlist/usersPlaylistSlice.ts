// // userRegister.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { Song } from "../../API/songsApi/getSongApi"
// import { getPlaylist } from "../../API/songsApi/getPlaylistApi"

// export interface playlistState {
//   playlist: Song[]
//   status: "idle" | "loading" | "failed"
// }

// const initialState: playlistState = {
//   playlist: [
//     { song_id: null, title: "", artist: "", img_src: "", src: "", genre: "" },
//   ],
//   status: "idle",
// }

// export const usersPlaylistSlice = createSlice({
//   name: "usersPlaylist",
//   initialState,
//   reducers: {
//     addSong: (state, action) => {
//       state.playlist.push(action.payload)
//     },
//     removeSong: (state, action) => {
//       state.playlist.filter((song) => song.song_id !== action.payload.song_id)
//     },
//     // getPlaylistFromDB: (state) => {
//     //   state.playlist = getPlaylist(1)
//     // },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getPlaylist.pending, (state) => {
//         state.status = "loading"
//       })
//       .addCase(getPlaylist.fulfilled, (state, action) => {
//         state.status = "idle"
//         state.playlist = action.payload
//       })
//       .addCase(getPlaylist.rejected, (state) => {
//         state.status = "failed"
//       })
//   },
// })

// export const { addSong, removeSong } = usersPlaylistSlice.actions

// export const playlistSelector = (state: RootState) => state.playlist
// export const playlistStatusSelector = (state: RootState) => state.status

// export const usersPlaylistReducer = usersPlaylistSlice.reducer

// export type RootState = ReturnType<typeof usersPlaylistReducer>

// export default usersPlaylistSlice.reducer

// userRegister.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
// import { RootState } from "./yourRootReducerFile"; // Replace with the actual path
import { RootState } from "../../app/store"
import { Song } from "../../API/songsApi/getSongApi"
import { getPlaylist } from "../../API/songsApi/getPlaylistApi"

// Assuming getPlaylist is an asynchronous function (Redux thunk)
// export const getPlaylist = createAsyncThunk(
//   "usersPlaylist/getPlaylist",
//   async (userId: number) => {
//     const response = await fetch(`/API/songsApi/getPlaylist/${userId}`)
//     const data = await response.json()
//     return data
//   },
// )

export interface playlistState {
  playlist: Song[]
  status: "idle" | "loading" | "failed"
}

const initialState: playlistState = {
  playlist: [
    { song_id: null, title: "", artist: "", img_src: "", src: "", genre: "" },
  ],
  status: "idle",
}

export const usersPlaylistSlice = createSlice({
  name: "usersPlaylist",
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      state.playlist.push(action.payload)
    },
    removeSong: (state, action: PayloadAction<Song>) => {
      state.playlist = state.playlist.filter(
        (song) => song.song_id !== action.payload.song_id,
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylist.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getPlaylist.fulfilled, (state, action) => {
        state.status = "idle"
        state.playlist = action.payload
      })
      .addCase(getPlaylist.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { addSong, removeSong } = usersPlaylistSlice.actions

export const playlistSelector = (state: RootState) => state.playlist.playlist
export const playlistStatusSelector = (state: RootState) =>
  state.playlist.status

export const usersPlaylistReducer = usersPlaylistSlice.reducer

export default usersPlaylistSlice.reducer
