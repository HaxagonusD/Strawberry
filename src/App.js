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
        <h1 tw="font-yellowtail text-white text-6xl bg-melon lg:text-8xl">
          Strawberry
        </h1>
        <StrawberryButton />
        <div tw="w-full ">
          <div tw="flex justify-around lg:mx-24 p-8 ">
            <div
              onClick={() => {
                setProps({ transform: "translateY(-50%)" });
                setToggle(true);
              }}
              tw="text-white text-4xl hover:cursor-pointer hover:bg-white hover:text-black font-amaranth p-2 rounded px-8 transition-all "
            >
              About
            </div>
            <div tw="text-white text-4xl hover:cursor-pointer hover:bg-white hover:text-black font-amaranth p-2 rounded px-8 transition-all ">
              Save
            </div>
          </div>
        </div>
      </div>
      <animated.div
        style={{
          ...props,
        }}
        tw="min-h-screen relative bg-isbaelline p-10 rounded m-6"
      >
        <h1 tw="text-5xl mb-8 font-amaranth">About</h1>

        <p tw="text-black  text-lg">
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
