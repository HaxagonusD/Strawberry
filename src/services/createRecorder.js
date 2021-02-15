// make this recorder use redux
import identifySongFromBlob from "../services/identifySongFromBlob";

const createRecorder = async (onStop, onStart) => {
  let chunks = [];
  let mediaRecorderStream = await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      return stream;
    })
    .catch((err) => err);

  const mediaRecorder = new MediaRecorder(mediaRecorderStream);

  mediaRecorder.ondataavailable = (event) => {
    chunks.push(event.data);
  };

  mediaRecorder.onstart = () => {
    onStart();
  };

  mediaRecorder.onstop = async (event) => {
    const blob = new Blob(chunks, {
      type: "audio/ogg; codecs=opus",
    });

    chunks = [];

    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      onStop(reader.result.replace("data:audio/ogg; codecs=opus;base64,", ""));
    });

    reader.readAsDataURL(blob);
  };

  console.log("We got the Stream", mediaRecorder);
  return mediaRecorder;
};

export default createRecorder;
