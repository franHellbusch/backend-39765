import styled from "styled-components";

export const Slide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #707070;
  transition: transform 0.7s ease-in-out;
  background: ${(props) => `url(${props.$backgroundImage})` || "grey"};
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: ${(props) => `translateX(${props.$translate})` || "auto"};
`;
