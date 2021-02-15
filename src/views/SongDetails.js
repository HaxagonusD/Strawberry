/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import SavedSongPreview from "../components/SavedSongPreview";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//lyrics and mini song details go in here
//
const SongDetails = () => {
  const songLyrics = useSelector(
    (state) => state?.songs?.lastSongIdentified?.data?.result?.lyrics?.lyrics
  );

  const image = useSelector(
    (state) =>
      state?.songs?.lastSongIdentified?.data?.result?.spotify?.album?.images[0]
        .url
  );

  const title = useSelector(
    (state) => state.songs.lastSongIdentified?.data?.result?.title
  );

  const artist = useSelector(
    (state) => state.songs.lastSongIdentified?.data?.result?.artist
  );
  const lyricsParser = (songLyrics) => {
    if (!songLyrics) {
      return ``;
    }

    return songLyrics.split("\n").map((string) => {
      return <p tw="text-liver">{string}</p>;
    });
  };

  console.log(songLyrics);
  return (
    <div>
      <div tw="hover:bg-white w-12 h-12 m-8 absolute flex justify-center items-center rounded-full transition-all ease-in-out">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tw="w-8 h-8 text-liver"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
      </div>
      <div tw="bg-pink  p-8 flex flex-col justify-center items-center">
        <SavedSongPreview image={image} title={title} artist={artist} />

        <div tw="bg-white shadow-lg w-full p-10 mt-12 lg:w-1/2">
          <h1 tw="text-liver font-amaranth text-4xl mb-4">Lyrics</h1>
          {lyricsParser(songLyrics)}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
