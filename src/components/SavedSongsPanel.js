/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { animated } from "react-spring";
import SavedSongsPreview from "./SavedSongPreview";
import { useSelector } from "react-redux";

const SavedSongsPanel = ({ savedProps }) => {
  const savedSongs = useSelector((state) => state.songs.savedSongs);
  return (
    <animated.div
      style={{ transform: savedProps.save }}
      tw="overflow-scroll min-h-screen max-h-screen fixed inset-x-0 bottom-0 lg:fixed lg:inset-y-0 lg:right-0 bg-isbaelline w-full lg:w-1/2 p-10 rounded shadow-xl "
    >
      <h1 tw="text-5xl mb-8 font-amaranth text-liver">Saved Songs</h1>
      <div tw="flex flex-col items-center">
        {savedSongs.map((current, index) => {
          const image = current.data.result.spotify.album.images[0].url;
          const title = current.data.result.title;
          const artist = current.data.result.artist;
          return (
            <SavedSongsPreview
              key={index}
              image={image}
              title={title}
              artist={artist}
            />
          );
        })}
      </div>
    </animated.div>
  );
};

export default SavedSongsPanel;
