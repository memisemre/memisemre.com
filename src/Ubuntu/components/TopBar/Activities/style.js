import styled from "styled-components";

export const ActivitiesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ActivitiesItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 12px;
  border-radius: 8px;
  transition: 0.25s all ease;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }
`;
