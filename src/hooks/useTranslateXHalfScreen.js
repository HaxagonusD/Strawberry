import { useState } from "react";
import { useSpring } from "react-spring";
const useTranslateYHalfScreen = () => {
  const [hasHappened, setHasHappened] = useState(false);

  const [props, setProps] = useSpring(() => ({
    transform: "translateX(-100%)",
  }));

  const start = () => {
    if (!hasHappened) {
      setHasHappened(true);
      setProps({ transform: "translateX(0%)" });
    }
  };

  const undo = () => {
    if (hasHappened) {
      setHasHappened(false);
      setProps({ transform: "translateX(-100%)" });
    }
  };

  return [props, start, undo, hasHappened];
};

export default useTranslateYHalfScreen;
