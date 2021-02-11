const initialState = {
  mediaSupported: true,
  recording: false,
};

const recorderReducer = (state = initialState, action) => {
  const actions = {
    "recorder/startRecording": () => {
      return { ...state, recording: true };
    },
    "recorder/stopRecording": () => {
      return { ...state, recording: false };
    },
    "recorder/mediaSupported": () => {
      return { ...state, mediaSupported: true };
    },
    "recorder/mediaNotSupported": () => {
      return { ...state, mediaSupported: false };
    },
  };
  const currentAction = actions[action.type];
  return currentAction ? currentAction() : state;
};

export default recorderReducer;
