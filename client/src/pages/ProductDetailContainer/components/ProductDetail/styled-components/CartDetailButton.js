import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

export const CartDetailButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(15% - 22px);
  font-size: 20px;
  font-weight: 700;
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 11px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.text.light};
  }
`;

export const CartDetailIcon = styled(ShoppingCartOutlinedIcon)`
  && {
    font-size: 31px;
    color: ${(props) => props.theme.background.white};
  }
`;
