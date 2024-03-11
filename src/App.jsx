import { useEffect } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import { useDispatch } from "react-redux";
import { fetchDataFromStorage } from "./Redux-Toolkit/Slices/songSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataFromStorage())
  }, []);
  return (
    <div className="">
      <Library />
      <Player />
    </div>
  );
}

export default App;
