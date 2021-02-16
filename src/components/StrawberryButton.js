/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useSelector } from "react-redux";
import useRecorder from "../hooks/useRecorder";
import { animated } from "react-spring";

const StrawberryButton = ({ aboutProps }) => {
  const mediaRecorder = useRecorder();
  const recording = useSelector((state) => state.recorder.recording);

  const styleMap = {
    recording: animated(
      tw.div`relative bg-pastel w-48 h-48 rounded-full animate-ping `
    ),
    notRecording: animated(
      tw.div`relative bg-pastel w-48 h-48 rounded-full cursor-pointer `
    ),
  };

  const Strawberry = recording ? styleMap.recording : styleMap.notRecording;
  const AnimatedStrawberry = Strawberry;

  return (
    <div>
      <AnimatedStrawberry
        style={{
          transform: aboutProps.strawberry,
        }}
        onClick={() => {
          console.log(mediaRecorder.state);
          if (!recording) {
            mediaRecorder.start();
            setTimeout(() => mediaRecorder.stop(), 15000);
          }
        }}
      ></AnimatedStrawberry>
    </div>
  );
};

export default StrawberryButton;
