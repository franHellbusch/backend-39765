import styled from "styled-components";

export const AdminNav = styled.nav`
  width: calc(100% - 60px);
  padding: 30px;
  border-bottom: 2px solid ${(props) => props.theme.colors.extraLight};
  display: flex;
`;
