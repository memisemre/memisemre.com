import styled from "styled-components";

export const UserControlsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
`;

export const UserControlsInner = styled.div`
  display: flex;
  align-items: center;
  transition: 0.25s all ease;
  cursor: pointer;
  padding: 2px 12px;
  border-radius: 8px;
  gap: 10px;
  svg {
    width: 14px;
    height: 14px;
  }
  &:hover {
    background-color: #333333;
  }
`;
