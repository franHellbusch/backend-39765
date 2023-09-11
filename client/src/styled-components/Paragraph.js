import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${(props) => props.$fontsize || "14px"};
  color: ${(props) => props.$color || props.theme.text.dark};
  font-weight: ${(props) => props.$weight || "400"};
  align-self: ${(props) => props.$alignself || "start"};
  margin: ${(props) => props.$margin || "0"};
  text-align: ${(props) => props.$textalign || "auto"};
`;
