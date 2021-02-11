import identifySongFromBlob from "../../services/identifySongFromBlob";

export const songLoaded = (payload) => {
  return {
    type: "songs/songLoaded",
    payload,
  };
};

export const errorFetchingSongs = (payload) => {
  return {
    type: "songs/errorFetchingSongs",
    payload,
  };
};

export const loadingSong = () => {
  return {
    type: "songs/loadingSong",
  };
};

export const fetchSongs = (blobUrl) => {
  return async (dispatch, getState) => {
    const songData = await identifySongFromBlob(blobUrl);
    dispatch(loadingSong());
    console.log(songData);
    songData
      ? dispatch(songLoaded(songData))
      : dispatch(errorFetchingSongs(songData));
  };
};
