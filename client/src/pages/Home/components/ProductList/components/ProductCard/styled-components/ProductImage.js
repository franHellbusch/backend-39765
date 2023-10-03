import styled from "styled-components";

export const ProductImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background: ${(props) => props.theme.colors.primaryExtraLight};
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 90%;
  aspect-ratio: 1/1;
  height: 100%;
  border-radius: 20px 20px 0 0;
  object-fit: cover;
  object-position: center;
`;
