import styled, { keyframes, css } from "styled-components";
export const ContentWrapper = styled.div`
  display: flex;
  max-height: 100vh;
  height: calc(100vh - 24px);
`;

const Animate = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const DesktopWrapper = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  height: 100vh;
  max-height: 100vh;
  animation: ${(props) =>
    props.display
      ? css`
          ${Animate} 0.5s ease-in-out
        `
      : "none"};
`;
