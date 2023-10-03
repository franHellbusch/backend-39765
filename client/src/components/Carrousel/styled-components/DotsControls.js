import styled from "styled-components";

export const DotsControlsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 15%;
  left: 5%;
`;

export const DotsControl = styled.button`
  width: ${(props) => (props.$current ? "50px" : "12px")};
  border-radius: 13px;
  margin: 0 3px;
  height: 12px;
  border: 0;
  background: ${(props) => props.theme.colors.primaryExtraLight};
  transition: 0.7s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;
