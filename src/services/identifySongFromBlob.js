async function identifySongFromBlob(blob) {
  let data = {
    api_token: "041abfc5c3c035b2e8978417c7fcfa10",
    url: blob,
    return: "apple_music,spotify,lyrics",
  };

  let song = new FormData();
  song.append("api_token", data.api_token);

  song.append("url", data.url);

  song.append("return", data.return);

  return await axios({
    method: "post",
    url: "https://api.audd.io/",
    data: song,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log("This is an Error:", error);
      return error;
    });
}

export default identifySongFromBlob;
