import React, { useState, useEffect } from "react";
import axios from "axios";
function SongFinder() {
  const [find, setFinder] = useState({});
  let data = {
    api_token: "041abfc5c3c035b2e8978417c7fcfa10",
    url: "https://audd.tech/example1.mp3",
    return: "apple_music,spotify,lyrics",
  };

  let song = new FormData();
  song.append("api_token", data.api_token);

  song.append("url", data.url);

  song.append("return", data.return);

  const response = () => {
    axios({
      method: "post",
      url: "https://api.audd.io/",
      data: song,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        setFinder(response);
      })
      .catch(function (error) {
        console.log("This is an Error:", error);
      });
  };
  useEffect(() => {
    response();
  }, []);

  return (
    <div>
      <p>foo</p>
    </div>
  );
}

export default SongFinder;
