import styled from "styled-components";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

export const ProfileShopingIcon = styled(ShoppingBasketOutlinedIcon)`
  && {
    font-size: 29px;
    margin-right: 3px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
