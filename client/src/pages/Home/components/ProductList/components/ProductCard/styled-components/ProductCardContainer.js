import styled from "styled-components";

export const ProductCardContainter = styled.div`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "auto"};
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin: ${(props) => props.$margin || 0};
  border: 1px solid ${(props) => props.theme.colors.light};
  transition: 0.3s;

  &:hover {
    transform: scale(1.02);
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
