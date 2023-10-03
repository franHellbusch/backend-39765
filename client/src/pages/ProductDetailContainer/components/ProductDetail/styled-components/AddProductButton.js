import styled from "styled-components";

export const AddProductButton = styled.button`
  width: 82%;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.$disabled ? props.theme.text.light : props.theme.colors.primary};
  background: ${(props) =>
    props.$disabled ? props.theme.colors.primaryLight : props.theme.background.white};
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 15px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.text.light};
  }
`;
