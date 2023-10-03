import styled from "styled-components";

export const AdminProductListRow = styled.div`
  width: calc(100% - 50px);
  padding: 20px 25px;
  border-radius: 5px;
  background: ${(props) => (props.$salient ? props.theme.colors.extraLight : "none")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
