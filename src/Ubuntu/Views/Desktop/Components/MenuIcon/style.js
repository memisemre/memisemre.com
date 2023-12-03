import styled from "styled-components";

export const IconWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4px;
  row-gap: 4px;
  border-radius: 4px;
  transition: 0.25s all ease;
  cursor: pointer;
  div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
  }
  &:hover {
    background-color: rgba(51, 51, 51, 0.5);
  }
`;
