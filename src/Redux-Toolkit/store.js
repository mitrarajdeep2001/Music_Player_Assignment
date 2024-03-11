import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./Slices/songSlice";
import localforage from "localforage";

const store = configureStore({
  reducer: songReducer,
});

export default store;

export async function saveState() {
  try {
    const reduxState = store.getState();
    await localforage.setItem("music-player-storage", reduxState);
  } catch (error) {
    console.log(error);
  }
}
