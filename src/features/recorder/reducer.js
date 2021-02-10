const initialState = {
  mediaRecorder: null,
  chunks: [],
  blobUrl: undefined,
};

const recorderReducer = (state = initialState, action) => {
  const actions = {};
  const currentAction = actions[action.type];
  return currentAction ? currentAction() : state;
};

export default recorderReducer;
