const initialState = {
  allSongs: {},
  savedSongs: [],
};

const fetchSongs = () => {
  return async (blobUrl) => {};
};

const songsReducer = (state = initialState, action) => {
  const actions = {};
  const currentAction = actions[action.type];
  return currentAction ? currentAction() : state;
};

export default songsReducer;
