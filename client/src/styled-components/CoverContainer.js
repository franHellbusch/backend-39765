import styled from "styled-components";

export const CoverContainer = styled.div`
  width: ${(props) => props.$width || "100%"};
  min-height: calc(100vh - 72px);
  max-width: ${(props) => props.$maxwidth || "none"};
  flex-wrap: ${(props) => props.$wrap || "auto"};
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "center"};
  align-items: ${(props) => props.$align || "center"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
  position: ${(props) => props.$position || "static"};
  overflow-x: hidden;
  background: ${(props) => props.$background || "none"};
`;
