import React from "react";
import UbuntuProvider from "./styles/UbuntuProvider";
import HomePage from "./Views/Desktop";
import LockScreen from "./Views/LockScreen";
const Ubuntu = () => {
  return (
    <UbuntuProvider>
      <LockScreen />
    </UbuntuProvider>
  );
};

export default Ubuntu;
