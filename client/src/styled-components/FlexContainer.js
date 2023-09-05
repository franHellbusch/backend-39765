import styled from "styled-components";

export const FlexContainer = styled.div`
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  max-width: ${(props) => props.$maxwidth || "none"};
  flex-wrap: ${(props) => props.$wrap || "auto"};
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "flex-start"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;
