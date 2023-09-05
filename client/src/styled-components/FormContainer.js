import styled from "styled-components";

export const FormContainer = styled.form`
  width: ${(props) => props.$width || "auto"};
  max-width: ${(props) => props.$maxwidth || "auto"};
  display: flex;
  flex-direction: ${(props) => props.$direction || "column"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "stretch"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;
