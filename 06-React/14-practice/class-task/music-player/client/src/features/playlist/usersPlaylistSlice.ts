import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { Song } from "../../API/songsApi/getSongApi"
import { getPlaylist } from "../../API/songsApi/getPlaylistApi"

export interface playlistState {
  playlist: Song[]
  status: "idle" | "loading" | "failed"
}

const initialState: playlistState = {
  playlist: [
    { song_id: 0, title: "", artist: "", img_src: "", src: "", genre: "" },
  ],
  status: "idle",
}

export const usersPlaylistSlice = createSlice({
  name: "usersPlaylist",
  initialState,
  reducers: {
    addNewSong: (state, action: PayloadAction<Song>) => {
      state.playlist.push(action.payload)
    },
    removeSongFromState: (state, action: PayloadAction<Song>) => {
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

export const { addNewSong, removeSongFromState } = usersPlaylistSlice.actions

export const playlistSelector = (state: RootState) => state.playlist.playlist
export const playlistStatusSelector = (state: RootState) =>
  state.playlist.status

export const usersPlaylistReducer = usersPlaylistSlice.reducer

export default usersPlaylistSlice.reducer
