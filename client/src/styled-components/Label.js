import styled from "styled-components";

export const Label = styled.label`
  font-size: ${(props) => props.$fontSize || "13px"};
  color: ${(props) => props.$color || props.theme.text.grey};
  font-weight: ${(props) => props.$weight || "500"};
`;
