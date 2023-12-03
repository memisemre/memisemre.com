import styled from "styled-components";

export const DateDisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
export const DateDisplayText = styled.p`
  font-size: 14px;
  cursor: pointer;
  padding: 2px 12px;
  border-radius: 8px;
  transition: 0.25s all ease;
  &:hover {
    background-color: #333333;
  }
`;
