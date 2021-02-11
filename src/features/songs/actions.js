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

export const fetchSongs = () => {
  return async (dispatch, getState) => {
    const blobUrl = getState().recorder.blobUrl;
    const songData = identifySongFromBlob(blobUrl);
    songData
      ? dispatch(songLoaded(songData))
      : dispatch(errorFetchingSongs(songData));
  };
};
