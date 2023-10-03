import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${(props) => props.$fontsize || "14px"};
  color: ${(props) => props.$color || props.theme.text.dark};
  font-weight: ${(props) => props.$weight || "400"};
  align-self: ${(props) => props.$alignself || "start"};
  justify-self: ${(props) => props.$justifyself || "auto"};
  margin: ${(props) => props.$margin || "0"};
  text-align: ${(props) => props.$textalign || "auto"};
  font-style: ${(props) => props.$style || "normal"};
`;
