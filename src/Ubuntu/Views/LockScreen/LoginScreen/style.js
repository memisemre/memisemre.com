import styled, { css, keyframes } from "styled-components";

const OpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const LoginScreenWrapper = styled.div`
  display: ${(props) => (props.startAnimation ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 100%;
  animation: ${(props) =>
    props.startAnimation
      ? css`
          ${OpenAnimation} 0.5s ease-in-out
        `
      : "none"};
`;
