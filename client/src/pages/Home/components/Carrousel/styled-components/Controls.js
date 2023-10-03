import styled from "styled-components";

export const Controls = styled.div`
  width: calc(100% + 8%);
  left: -4%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

export const ControlButton = styled.button`
  width: 7%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 0;
  background: ${(props) => props.theme.colors.primaryExtraLight};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  cursor: pointer;
  font-size: 30px;
  transition: 0.5s;

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
    transform: scale(1.03);
  }
`;
