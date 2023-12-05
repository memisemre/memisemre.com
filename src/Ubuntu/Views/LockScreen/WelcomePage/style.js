import styled, { keyframes } from "styled-components";

export const WelcomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
