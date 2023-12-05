import React from "react";
import UbuntuProvider from "./styles/UbuntuProvider";
import LockScreen from "./Views/LockScreen";
const Ubuntu = () => {
  return (
    <UbuntuProvider>
      <LockScreen />
    </UbuntuProvider>
  );
};

export default Ubuntu;
