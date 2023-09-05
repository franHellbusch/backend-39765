import styled from "styled-components";

export const ProductImage = styled.img`
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  max-width: ${(props) => props.$maxwidth || "none"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
  border-radius: 20px 20px 0 0;
`;
