import WelcomePage from "./WelcomePage";
import { OutWrapper } from "./style";
import { useState, useEffect } from "react";
const LockScreen = ({ isClicked }) => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setDisplay(true);
      }, 2000);
    }
  }, [isClicked]);
  return (
    <OutWrapper display={display}>
      <WelcomePage isClicked={isClicked} />
    </OutWrapper>
  );
};

export default LockScreen;
