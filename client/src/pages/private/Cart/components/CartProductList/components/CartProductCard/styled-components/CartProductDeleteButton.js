import styled from "styled-components";

export const CartProductButton = styled.button`
  border: 0;
  background: none;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  margin-right: 20px;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;
