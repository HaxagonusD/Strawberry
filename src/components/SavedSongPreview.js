/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

const SavedSongPreview = ({ image, title, artist }) => {
  return (
    <div id="outerContainer" tw="w-96 flex h-full rounded-md  p-4 ">
      <div id="image" tw="bg-white  w-6/12 rounded-l-md overflow-hidden h-44 ">
        <img alt="song image" src={image} tw="" />
      </div>
      <div
        id="information"
        tw="bg-nicered w-6/12 h-44 row-span-1 rounded-r-md text-white text-2xl p-4 flex items-center"
      >
        {title ? ` ${title} by ${artist} ` : ``}
      </div>
    </div>
  );
};

export default SavedSongPreview;
