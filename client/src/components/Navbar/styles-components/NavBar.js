import { styled } from "styled-components";

export const NavBar = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: ${(props) => props.theme.colors.light} 0px 1px 4px;
`;
