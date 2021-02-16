const initialState = {
  // allSongs: {},
  lastSongIdentified: {},
  savedSongs: [],
  loading: false,
  error: false,
  errorMessage: "",
  isSongSaved: false,
};

const songsReducer = (state = initialState, action) => {
  const actions = {
    "songs/songLoaded": () => {
      return {
        ...state,
        loading: false,
        lastSongIdentified: action.payload,
        error: false,
        isSongSaved: false,
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
    "songs/saveCurrentSong": () => {
      if (!state.isSongSaved) {
        return {
          ...state,
          savedSongs: [...state.savedSongs, state.lastSongIdentified],
          isSongSaved: true,
        };
      } else {
        return state;
      }
    },
  };
  const currentAction = actions[action.type];
  return currentAction ? currentAction() : state;
};

export default songsReducer;
