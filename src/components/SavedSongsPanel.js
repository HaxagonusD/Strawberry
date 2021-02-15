/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { animated } from "react-spring";
import SavedSongsPreview from "./SavedSongPreview";

const SavedSongsPanel = ({ savedProps }) => {
  return (
    <animated.div
      style={{ transform: savedProps.save }}
      tw="overflow-visible min-h-screen fixed inset-x-0 bottom-0 lg:fixed lg:inset-y-0 lg:right-0 bg-isbaelline w-full lg:w-1/2 p-10 rounded shadow-xl "
    >
      <h1 tw="text-5xl mb-8 font-amaranth text-liver">Saved Songs</h1>
      <div tw="flex flex-col items-center">
        <SavedSongsPreview />
        <SavedSongsPreview />
      </div>
    </animated.div>
  );
};

export default SavedSongsPanel;
