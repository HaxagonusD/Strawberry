const configureRecorder = async () => {
  const chunks = [];
  let mediaRecorderStream = await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      return stream;
    })
    .catch((err) => err);
  const mediaRecorder = new MediaRecorder(mediaRecorderStream);
  mediaRecorder.ondataavailable = (event) => {
    chunks.current.push(event.data);
  };

  mediaRecorder.current.onstop = async (event) => {
    const blob = new Blob(chunks, {
      type: "audio/ogg; codecs=opus",
    });
    chunks = [];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result);

      identifySongFromBlob(
        reader.result.replace("data:audio/ogg; codecs=opus;base64,", "")
      );
    });
    reader.readAsDataURL(blob);
  };
  console.log("We got the Stream", mediaRecorder);
  return mediaRecorder;
};
export default configureRecorder;
