import React from "react";
import UbuntuProvider from "./styles/UbuntuProvider";
import HomePage from "./Views/Desktop";
const Ubuntu = () => {
  return (
    <UbuntuProvider>
      <HomePage />
    </UbuntuProvider>
  );
};

export default Ubuntu;
