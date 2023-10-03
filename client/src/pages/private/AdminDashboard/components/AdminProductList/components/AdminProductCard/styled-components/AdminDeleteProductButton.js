import styled from "styled-components";

export const AdminDeleteProductButton = styled.button`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.alert.danger};
  border: 0;
  color: ${(props) => props.theme.text.light};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.alert.dangerLight};
  }
`;
