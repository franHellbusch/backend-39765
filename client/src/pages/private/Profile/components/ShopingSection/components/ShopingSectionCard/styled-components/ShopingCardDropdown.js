import styled from "styled-components";

export const ShopingCardDropdown = styled.button`
  width: 100%;
  padding: 20px 30px;
  background: none;
  border: 0;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.extraLight};
  cursor: pointer;
`;
