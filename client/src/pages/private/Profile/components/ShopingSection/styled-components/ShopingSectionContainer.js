import styled from "styled-components";

export const ShopingSectionContainer = styled.div`
  width: calc(100% - 60px);
  margin: 30px;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) =>
    props.$empty
      ? "none"
      : "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"};
`;
