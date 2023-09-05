import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const CartIcon = styled(ShoppingCartOutlinedIcon)`
  && {
    font-size: 20px;
    margin-right: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
