import axios from "axios";

async function identifySongFromBlob(blob) {
  let data = {
    api_token: "44954b8ed957bdbdfbfa8c442de9a8e0",
    audio: blob,
    return: "apple_music,spotify,lyrics",
  };

  console.log(data.file);

  let song = new FormData();
  song.append("api_token", data.api_token);
  song.append("audio", data.audio);
  song.append("return", data.return);

  return await axios({
    method: "post",
    url: "https://api.audd.io/",
    data: song,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

export default identifySongFromBlob;
