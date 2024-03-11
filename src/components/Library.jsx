import { useDispatch, useSelector } from "react-redux";
import { setPlaylist, setCurrentSong } from "../Redux-Toolkit/Slices/songSlice";
import { saveState } from "../Redux-Toolkit/store";

const Library = () => {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist); //Get playlist from the store.
  const currentSong = useSelector((state) => state.currentSong); //Get current song from the store.
  //This function will add a new song in the playlist.
  const handlePlaylist = (file) => {
    dispatch(setPlaylist({ song: file }));
    saveState();
  };
  //This function will set the current song.
  const handleSong = (song) => {
    dispatch(setCurrentSong({ song }));
    saveState();
  };
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto overflow-x-hidden bg-gray-50 dark:bg-gray-800">
        <h2 className="text-2xl text-center text-white mb-6">My Playlist</h2>
        <button className="border rounded p-3 mb-6 w-full cursor-pointer hover:bg-gray-700">
          <label
            htmlFor="file"
            className="flex justify-around text-white uppercase cursor-pointer"
          >
            <span>Upload song</span>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 3c.3 0 .6.1.8.4l4 5a1 1 0 1 1-1.6 1.2L13 7v7a1 1 0 1 1-2 0V6.9L8.8 9.6a1 1 0 1 1-1.6-1.2l4-5c.2-.3.5-.4.8-.4ZM9 14v-1H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => handlePlaylist(e.target.files[0])}
          />
        </button>
        <ul className="space-y-2 font-medium">
          {playlist &&
            playlist.map((song, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSong(song)}
                  className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className={`w-6 h-6 text-gray-800 dark:text-white ${song.name === currentSong.name && "animate-bounce"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.3 4a1 1 0 0 0-.9.2 1 1 0 0 0-.4.8v8.6c-.6-.3-1.3-.5-2-.5-2 0-4 1.4-4 3.5 0 2 2 3.4 4 3.4s4-1.3 4-3.4V6.8a3 3 0 0 1 1 2.3c0 .5.4 1 1 1s1-.5 1-1a5 5 0 0 0-1.9-4 6.4 6.4 0 0 0-1.8-1ZM4 5a1 1 0 0 0-1 1c0 .6.4 1 1 1h9c.6 0 1-.4 1-1 0-.5-.4-1-1-1H4Zm0 4a1 1 0 0 0-1 1c0 .6.4 1 1 1h9c.6 0 1-.4 1-1 0-.5-.4-1-1-1H4Zm0 4.1a1 1 0 0 0-1 1c0 .6.4 1 1 1h4c.6 0 1-.4 1-1 0-.5-.4-1-1-1H4Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ms-3 w-[80%] truncate">{song.name}</span>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Library;
