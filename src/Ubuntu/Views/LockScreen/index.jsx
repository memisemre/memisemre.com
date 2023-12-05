import { useState } from "react";
import WelcomePage from "./WelcomePage";
import { OutWrapper } from "./style";
import { useEffect } from "react";
import LoginScreen from "./LoginScreen";
const LockScreen = () => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const handleUserInteraction = () => {
      setClicked(true);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);
  return (
    <OutWrapper>
      <WelcomePage isClicked={clicked} />
      <LoginScreen isClicked={clicked} />
    </OutWrapper>
  );
};

export default LockScreen;
