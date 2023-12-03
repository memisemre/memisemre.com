import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 0 6px 6px 6px;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const SideBarItem = styled.div`
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 4px;
  transition: 0.25s all ease;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "rgba(51, 51, 51, 0.5)" : "transparent"};
  svg {
    width: 28px;
    height: 28px;
  }
  &:hover {
    background-color: rgba(51, 51, 51, 0.5);
  }
`;
