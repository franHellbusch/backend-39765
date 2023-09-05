import { styled } from "styled-components";

export const NavBar = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
`;
