import styled from "styled-components";

export const DetailSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.light};
  flex-shrink: 0;
  transform: ${(props) => `translateY(${props.$translate})` || "auto"};

  & > img {
    height: 90%;
  }
`;
