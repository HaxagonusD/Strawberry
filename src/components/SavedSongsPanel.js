/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { animated } from "react-spring";
import SavedSongsPreview from "./SavedSongPreview";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SavedSongsPanel = ({ savedProps, setAboutYProps }) => {
  const savedSongs = useSelector((state) => state.songs.savedSongs);
  return (
    <animated.div
      style={{ transform: savedProps.save }}
      tw="overflow-scroll min-h-screen max-h-screen fixed inset-x-0 bottom-0 lg:fixed lg:inset-y-0 lg:right-0 bg-isbaelline w-full lg:w-1/2 p-10 pb-0 rounded shadow-xl "
    >
      <h1 tw="text-5xl mb-8 font-amaranth text-liver p-0 text-center">
        Saved Songs
      </h1>
      <div tw="flex flex-col items-center">
        {savedSongs.length === 0 ? (
          <div tw="text-lg text-liver text-center py-4">
            No saved songs. Press the Strawberry!
          </div>
        ) : (
          ""
        )}
        {savedSongs.map((current, index) => {
          const image = current.data.result.spotify.album.images[0].url;
          const title = current.data.result.title;
          const artist = current.data.result.artist;
          return (
            <Link to={`saved/${index}`}>
              <SavedSongsPreview
                key={index}
                image={image}
                title={title}
                artist={artist}
                id={index}
              />
            </Link>
          );
        })}
        <div tw="w-full flex justify-center">
          <div
            onClick={() => {
              setAboutYProps({
                to: {
                  aboutY: "translate(0%, 0% )",
                  save: "translate(0%, 100%)",
                  strawberry: "translate(0%, 0%)",
                },
              });
            }}
            tw="lg:hidden bg-melon p-2 mb-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              tw="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default SavedSongsPanel;
