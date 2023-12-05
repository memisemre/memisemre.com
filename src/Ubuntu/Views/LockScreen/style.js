import styled from "styled-components";

export const OutWrapper = styled.div`
  display: ${(props) => (props.display ? "none" : "flex")};
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(64px);
  background-color: rgba(0, 0, 0, 0.25);
`;
