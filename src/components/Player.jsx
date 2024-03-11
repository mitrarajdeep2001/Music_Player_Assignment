import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentSongTime,
  setNextSong,
} from "../Redux-Toolkit/Slices/songSlice";
import { saveState } from "../Redux-Toolkit/store";
import musicImg from "../assets/music-img.png";

const Player = () => {
  const [music, setMusic] = useState(null);
  const [animate, setAnimate] = useState(false);
  const audioRef = useRef(null); //Creates reference of the audio object.
  const currentSong = useSelector((state) => state.currentSong); //Get current song from the store.
  const currentSongTime = useSelector((state) => state.currentSongTime); //Get current song time from the store.
  const dispatch = useDispatch();
  useEffect(() => {
    playMusic();
  }, [currentSong]); //This will call the playMusic() function on initial load as well as on change of the current song.
  //This function is used to play the song.
  function playMusic() {
    if (currentSong.type !== undefined) {
      setMusic(URL.createObjectURL(currentSong));
      audioRef.current.currentTime = currentSongTime;
    }
  }
  //This function will handle playing next song on complete of the current song.
  function handlePlayComplete() {
    dispatch(setNextSong());
    saveState();
  }
  //This function will set the current position of the current song.
  function getCurrentSongTime() {
    console.log(audioRef.current.poster);
    dispatch(setCurrentSongTime({ songTime: audioRef.current.currentTime }));
    saveState();
    setAnimate(false);
  }
  return (
    <div
      className={`relative float-right w-[calc(100vw-256px)] h-screen p-5 bg-gradient-to-r from-green-400 via-violet-600 to-red-400 ${
        animate && "animate-pulse"
      }`}
    >
      <h2 className="text-center text-2xl font-bold ">Music Player</h2>
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] rounded-full">
        <img src={musicImg} width={400} height={400} className="rounded-full" />
      </div>
      <div className="absolute bottom-8 left-[50%] transform translate-x-[-50%]">
        <h3 className="text-center font-bold mb-5">{currentSong.name}</h3>
        <div className="flex justify-center items-center w-96 font-bold">
          <audio
            controls
            autoPlay
            ref={audioRef}
            src={music}
            onEnded={handlePlayComplete}
            onPause={getCurrentSongTime}
            onPlay={() => setAnimate(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
