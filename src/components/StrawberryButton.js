/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useSelector } from "react-redux";
import useRecorder from "../hooks/useRecorder";

const StrawberryButton = () => {
  const mediaRecorder = useRecorder();
  const recording = useSelector((state) => state.recorder.recording);

  const styleMap = {
    recording: tw.div`bg-crayola w-48 h-48 rounded-full animate-pulse transition-all ease-in-out duration-500 `,
    notRecording: tw.div`bg-puff w-48 h-48 rounded-full hover:bg-isbaelline transition-all`,
  };

  const Strawberry = recording ? styleMap.recording : styleMap.notRecording;

  return (
    <div>
      <Strawberry
        onClick={() => {
          console.log(mediaRecorder.state);
          mediaRecorder.start();

          setTimeout(() => mediaRecorder.stop(), 15000);
        }}
      ></Strawberry>
    </div>
  );
};

export default StrawberryButton;
