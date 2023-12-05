import React, { useState, useEffect } from "react";
import UbuntuProvider from "./styles/UbuntuProvider";
import LockScreen from "./Views/LockScreen";
import Desktop from "./Views/Desktop";
const Ubuntu = () => {
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
    <UbuntuProvider>
      <LockScreen isClicked={clicked} />
      <Desktop isClicked={clicked} />
    </UbuntuProvider>
  );
};

export default Ubuntu;
