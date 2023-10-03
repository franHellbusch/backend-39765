import styled from "styled-components";

export const CartResumeContainer = styled.div`
  width: 32%;
  background: ${(props) =>
    props.$empty ? props.theme.background.light : props.theme.background.white};
  box-shadow: ${(props) =>
    props.$empty ? "rgba(0, 0, 0, 0.04) 0px 3px 5px" : "0 1px 2px 0 rgba(0,0,0,.12)"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
