import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localforage from "localforage";

// First, create the thunk
export const fetchDataFromStorage = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    try {
      const response = await localforage.getItem("music-player-storage");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
fetchDataFromStorage();
const initialState = {
  playlist: [],
  currentSong: {},
  currentSongTime: 0,
  trackCount: {},
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist.unshift(action.payload.song);
      state.playlist.forEach((song, index) => {
        state.trackCount[song.lastModified] = index;
      });
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload.song;
    },
    setNextSong: (state) => {
      if (
        state.trackCount[state.currentSong.lastModified] + 1 ===
        state.playlist.length
      ) {
        state.currentSong = state.playlist[0];
        return;
      }
      state.currentSong =
        state.playlist[state.trackCount[state.currentSong.lastModified] + 1];
    },
    setCurrentSongTime: (state, action) => {
      state.currentSongTime = action.payload.songTime;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchDataFromStorage.fulfilled, (state, action) => {
      state.playlist = action.payload.playlist;
      state.currentSong = action.payload.currentSong;
      state.currentSongTime = action.payload.currentSongTime;
      state.trackCount = action.payload.trackCount;
    });
  },
});

export const { setPlaylist, setCurrentSong, setNextSong, setCurrentSongTime } =
  songSlice.actions;
export default songSlice.reducer;
