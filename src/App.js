import useRecorder from "./hooks/useRecorder";
import { useSelector } from "react-redux";

import "./App.css";
import SongFinder from "../src/components /SongFinder";
function App() {
  // const dispatch = useDispatch();
  // const blobUrl = useSelector((state) => state.recorder.blobUrl);
  // dispatch(fetchSongs(blobUrl));

  const mediaRecorder = useRecorder();
  const recording = useSelector((state) => state.recorder.recording);

  const recorder = mediaRecorder ? (
    <div>
      <button
        onClick={() => {
          console.log(mediaRecorder.state);
          mediaRecorder.start();

          setTimeout(() => mediaRecorder.stop(), 15000);
        }}
      >
        {recording ? "Listening" : "Strawberry"}
      </button>
    </div>
  ) : (
    ""
  );

  return <div className="App">{recorder}</div>;
}

export default App;
