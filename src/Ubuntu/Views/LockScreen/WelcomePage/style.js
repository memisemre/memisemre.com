import styled, { keyframes } from "styled-components";

export const WelcomePageWrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  height: 100%;
  max-height: ${(props) => (props.clicked ? "0" : "100vh")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.clicked ? 0 : 1)};
  transition: max-height 1s ease, opacity 1s ease;

  h1 {
    font-size: 64px;
  }

  p {
    font-size: 20px;
  }
`;

const ClickTextAnimation = keyframes`
  0%{
    opacity: 0;
  }
  75%{
    opacity: .5;
  }
  100%{
    opacity: 1;
  }
`;

export const ClickText = styled.p`
  font-size: 12px !important;
  margin-top: 16px;
  animation: ${ClickTextAnimation} 2s linear;
`;
