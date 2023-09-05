import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.$fontsize || "40px"};
  font-weight: ${(props) => props.$weight || "600"};
  color: ${(props) => props.$color || props.theme.text.dark};
  margin: ${(props) => props.$margin || "0"};
  margin-top: ${(props) => props.$margintop || "0"};
  margin-bottom: ${(props) => props.$marginbottom || "0"};
`;
