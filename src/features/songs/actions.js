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
    dispatch(loadingSong());
    const songDataOrError = await identifySongFromBlob(blobUrl);
    console.log(songDataOrError);
    songDataOrError
      ? dispatch(songLoaded(songDataOrError))
      : dispatch(errorFetchingSongs(songDataOrError));
  };
};

export const saveCurrentSong = () => {
  return {
    type: "songs/saveCurrentSong",
  };
};
