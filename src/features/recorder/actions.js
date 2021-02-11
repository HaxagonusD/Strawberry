export const startRecording = () => {
  return {
    type: "recorder/startRecording",
  };
};

export const stopRecording = () => {
  return {
    type: "recorder/stopRecording",
  };
};

export const mediaSupported = () => {
  return {
    type: "recorder/mediaSupported",
  };
};

export const mediaNotSupported = () => {
  return {
    type: "recorder/mediaNotSupported",
  };
};
