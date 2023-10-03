import styled from "styled-components";

export const TextInput = styled.input`
  width: ${(props) => props.$width || "auto"};
  font-size: ${(props) => props.$fontSize || "15px"};
  color: ${(props) => props.$color || props.theme.text.dark};
  background: ${(props) => props.$background || props.theme.background.white};
  padding: ${(props) => props.$padding || "15px 10px"};
  border: 1px solid ${(props) => props.$border || `${props.theme.colors.grey}`};
  outline: 0;
  border-radius: 10px;
  margin-top: ${(props) => props.$margintop || "0"};
  margin-bottom: ${(props) => props.$marginbottom || "0"};

  &:focus {
    border: ${(props) => props.$borderFocus || `1px solid ${props.theme.colors.primary}`};
  }
`;
