import styled from "styled-components";

export const DetailCarouselControls = styled.div`
  width: 65px;
  height: 100%;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailCarouselControlImage = styled.button`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryExtraLight};
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  border: 3px solid
    ${(props) => (props.$current ? props.theme.colors.primaryLight : props.theme.colors.grey)};
  border-radius: 0 8px 0 8px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-bottom: 10px;
  overflow: hidden;
  cursor: pointer;

  & > img {
    height: 90%;
  }
`;
