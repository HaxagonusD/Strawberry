const initialState = {
  allSongs: {},
  lastSongIdentified: {},
  savedSongs: [],
  loading: false,
  error: false,
  errorMessage: "",
};

const fetchSongs = () => {
  return async (blobUrl) => {};
};

const songsReducer = (state = initialState, action) => {
  const actions = {
    "songs/songLoaded": () => {
      return {
        ...state,
        loading: false,
        lastSongIdentified: action.payload,
        error: false,
      };
    },
    "songs/errorFetchingSongs": () => {
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false,
      };
    },
    "songs/loadingSong": () => {
      return { ...state, loading: true };
    },
  };
  const currentAction = actions[action.type];
  return currentAction ? currentAction() : state;
};

export default songsReducer;
