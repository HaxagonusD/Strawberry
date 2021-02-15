/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
// import "./App.css";
import StrawberryButton from "../components/StrawberryButton";
import { useSpring, animated } from "react-spring";
import { useMediaQuery } from "react-responsive";
import SavedSongsPanel from "../components/SavedSongsPanel";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const [aboutXProps, setAboutXProps] = useSpring(() => ({
    to: {
      aboutX: "translate(-100%, 0%)",
      strawberry: "translate(0vw,0%)",
      save: "translate(200%,0%)",
    },
    from: {
      aboutX: "translate(-100%,0%)",
      strawberry: "translate(0vw, 0%)",
      save: "translate(200%, 0%)",
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 26,
    },
  }));

  const [aboutYProps, setAboutYProps] = useSpring(() => ({
    to: {
      aboutY: "translate(0%, 0%)",
      strawberry: "translate(0vw,0%)",
      save: "translate(0%,100%)",
    },
    from: {
      aboutY: "translate(0%, 0%)",
      strawberry: "translate(0vw,0%)",
      save: "translate(0%,100%)",
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 26,
    },
  }));

  return (
    <div tw="w-full h-screen overflow-hidden">
      <div
        onClick={() => {
          if (isDesktopOrLaptop) {
            setAboutXProps({
              to: {
                aboutX: "translate(-100%,0%)",
                strawberry: "translate(0vw, 0%)",
                save: "translate(200%,0%)",
              },
            });
          } else {
            setAboutYProps({
              to: {
                aboutY: "translate(0%, 0%)",
                save: "translate(0%, 100%)",
                strawberry: "translate(0%, 0%)",
              },
            });
          }
        }}
        className="App"
        style={{
          background: "rgb(255,180,162)",
          background:
            "radial-gradient(circle, rgba(255,180,162,1) 0%, rgba(255,226,219,1) 100%)",
        }}
        tw="flex w-full h-screen justify-around items-center flex-col "
      >
        <animated.h1
          style={{ transform: aboutXProps.strawberry }}
          tw="font-yellowtail text-white text-6xl lg:text-8xl bg-opacity-0"
        >
          Strawberry
        </animated.h1>
        <StrawberryButton
          aboutProps={isDesktopOrLaptop ? aboutXProps : aboutYProps}
        />
        <div tw="w-full">
          <div tw="flex justify-around lg:mx-24 ">
            <div
              onClick={(event) => {
                event.stopPropagation();
                if (isDesktopOrLaptop) {
                  setAboutXProps({
                    to: {
                      aboutX: "translate(0%,0%)",
                      strawberry: "translate(25vw,0%)",
                      save: "translate(200%, 0%)",
                    },
                  });
                } else {
                  console.log("in about mobile");
                  setAboutYProps({
                    to: {
                      aboutY: "translate(0%, -50%)",
                      strawberry: "translate(0%, -54%)",
                    },
                  });
                }
              }}
              tw="text-liver text-4xl hover:cursor-pointer bg-isbaelline lg:hover:bg-white lg:hover:text-black font-amaranth p-2 rounded px-8 transition-all "
            >
              About
            </div>
            <animated.div
              tw="text-liver text-4xl hover:cursor-pointer bg-isbaelline lg:hover:bg-white lg:hover:text-black font-amaranth p-2 rounded px-8 transition-all "
              onClick={(event) => {
                event.stopPropagation();
                if (isDesktopOrLaptop) {
                  setAboutXProps({
                    to: {
                      aboutX: "translate(-100%,0%)",
                      save: "translate(100%,0%)",
                      strawberry: "translate(-25vw,0%)",
                    },
                  });
                } else {
                  setAboutYProps({
                    to: {
                      aboutY: "translate(0%,0%)",
                      save: "translate(0%, 50%)",
                      strawberry: "translate(0%, -54%)",
                    },
                  });
                }
              }}
            >
              Saved
            </animated.div>
          </div>
        </div>
      </div>
      <animated.div
        style={
          isDesktopOrLaptop
            ? { transform: aboutXProps.aboutX }
            : { transform: aboutYProps.aboutY }
        }
        tw="min-h-screen lg:fixed lg:inset-y-0 lg:left-0 bg-isbaelline w-full lg:w-1/2 p-10 rounded shadow-xl "
      >
        <h1 tw="text-5xl mb-8 font-amaranth text-liver">About</h1>

        <p tw="text-liver text-lg">
          Ever not know the name of the song you’re listening to? Strawberry is
          here to help you out. Just press the Strawberry icon and in a few
          moments you will know the name of the song with lyrics to it too, if
          any.
        </p>
      </animated.div>
      <SavedSongsPanel
        savedProps={isDesktopOrLaptop ? aboutXProps : aboutYProps}
      />
    </div>
  );
}

export default App;
