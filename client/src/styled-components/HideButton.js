import styled from "styled-components";

export const HideButton = styled.button`
  color: ${(props) => props.theme.text.grey};
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;
