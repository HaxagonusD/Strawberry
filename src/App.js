import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "./features/songs/actions";

import "./App.css";

function App() {
  // const dispatch = useDispatch();
  // const blobUrl = useSelector((state) => state.recorder.blobUrl);
  // dispatch(fetchSongs(blobUrl));

  const mediaRecorder = useRef(null);
  const chunks = useRef([]);
  const [setup, setSetup] = useState(false);
  const [audioPreview, setAudioPreview] = useState(undefined);

  useEffect(() => {
    if (navigator?.mediaDevices?.getUserMedia) {
      console.log("getUserMedia supported ");
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorder.current = new MediaRecorder(stream);
          mediaRecorder.current.ondataavailable = (event) => {
            chunks.current.push(event.data);
          };
          mediaRecorder.current.onstop = (event) => {
            const blob = new Blob(chunks.current, {
              type: "audio/ogg; codecs=opus",
            });
            chunks.current = [];
            const audioURL = window.URL.createObjectURL(blob);
            const audioTag = (
              <audio controls>
                <source src={audioURL} type="audio/ogg"></source>
              </audio>
            );
            setAudioPreview(audioTag);
          };
          setSetup(true);
          console.log("We got the Stream", mediaRecorder.current);
        })
        .catch((err) =>
          console.error("The following getUserMedua error occurred" + err)
        );
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
      {audioPreview}
    </div>
  ) : (
    ""
  );

  return <div className="App">{recorder}</div>;
}

export default App;
