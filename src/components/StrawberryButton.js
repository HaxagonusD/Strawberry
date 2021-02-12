/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useSelector } from "react-redux";
import useRecorder from "../hooks/useRecorder";
import { useSpring, animated } from "react-spring";

const StrawberryButton = () => {
  const mediaRecorder = useRecorder();
  const recording = useSelector((state) => state.recorder.recording);
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const styleMap = {
    recording: tw.div`bg-red-500 w-48 h-48 rounded-full animate-pulse transition-all ease-in-out duration-500 `,
    notRecording: tw.div`bg-blue-500 w-48 h-48 rounded-full `,
  };

  const Strawberry = recording ? styleMap.recording : styleMap.notRecording;
  const AnimatedStrawberry = animated(Strawberry);

  return (
    <div>
      <Strawberry
        onClick={() => {
          console.log(mediaRecorder.state);
          mediaRecorder.start();

          setTimeout(() => mediaRecorder.stop(), 15000);
        }}
        style={props}
      ></Strawberry>
    </div>
  );
};

export default StrawberryButton;
