import { useState } from "react";
import { useSpring } from "react-spring";
const useTranslateYHalfScreen = () => {
  const [hasHappened, setHasHappened] = useState(false);

  const [props, setProps] = useSpring(() => ({
    transform: "translateY(0%)",
  }));

  const start = () => {
    if (!hasHappened) {
      setHasHappened(true);
      setProps({ transform: "translateY(-50%)" });
    }
  };

  const undo = () => {
    if (hasHappened) {
      setHasHappened(false);
      setProps({ transform: "translateY(50%)" });
    }
  };

  return [props, start, undo, hasHappened];
};

export default useTranslateYHalfScreen;
