import React from "react";
import UbuntuProvider from "./styles/UbuntuProvider";
import styled from "styled-components";
import TopBar from "./components/TopBar";
const Background = styled.div`
  background: url("/ubuntuBackground.jpg");
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
const Ubuntu = () => {
  return (
    <UbuntuProvider>
      <Background>
        <TopBar />
      </Background>
    </UbuntuProvider>
  );
};

export default Ubuntu;
