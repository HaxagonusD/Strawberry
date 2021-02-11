import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "./features/songs/actions";
import configureRecorder from "./services/configureRecorder";

import "./App.css";
import SongFinder from "../src/components /SongFinder";
function App() {
  // const dispatch = useDispatch();
  // const blobUrl = useSelector((state) => state.recorder.blobUrl);
  // dispatch(fetchSongs(blobUrl));

  const mediaRecorder = useRef(null);

  useEffect(() => {
    if (navigator?.mediaDevices?.getUserMedia) {
      console.log("getUserMedia supported ");
      mediaRecorder.current = configureRecorder();
    } else {
      console.log("getUserMedia not supported on your browser");
    }
  }, []);

  const recorder = mediaRecorder.current ? (
    <div>
      <button
        onClick={() => {
          mediaRecorder.current.start();
        }}
      >
        Start Recorder
      </button>
      <button
        onClick={() => {
          mediaRecorder.current.stop();
        }}
      >
        Stop
      </button>
    </div>
  ) : (
    ""
  );

  return <div className="App">{recorder}</div>;
}

export default App;
