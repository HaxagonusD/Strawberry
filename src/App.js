/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import "./App.css";
import StrawberryButton from "./components/StrawberryButton";
import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";
function App() {
  // const dispatch = useDispatch();
  // const blobUrl = useSelector((state) => state.recorder.blobUrl);
  // dispatch(fetchSongs(blobUrl));

  const [props, setProps] = useSpring(() => ({
    transform: "translateY(0%)",
  }));
  const [toggle, setToggle] = useState(false);

  return (
    <div tw="w-full h-screen overflow-hidden">
      <div
        onClick={() => {
          if (toggle) {
            setToggle(false);
            setProps({
              transform: "translateY(50%)",
              from: { transform: "translateY(50%)" },
            });
          }
        }}
        className="App"
        tw="flex w-full h-screen justify-around items-center bg-melon flex-col "
      >
        <StrawberryButton />
        <div tw="flex justify-around w-full">
          <div
            onClick={() => {
              setProps({ transform: "translateY(-50%)" });
              setToggle(true);
            }}
            tw="text-white text-2xl"
          >
            About
          </div>
          <div tw="text-white text-2xl">Save</div>
        </div>
        <div tw="bg-white"></div>
      </div>
      <animated.div
        style={{
          ...props,
        }}
        tw="min-h-screen relative bg-white p-8 rounded"
      >
        <h1 tw="text-4xl mb-8">About</h1>

        <p tw="text-black ">
          Ever not know the name of the song you’re listening to? Strawberry is
          here to help you out. Just press the Strawberry icon and in a few
          moments you will know the name of the song with lyrics to it too, if
          any.
        </p>
      </animated.div>
    </div>
  );
}

export default App;
