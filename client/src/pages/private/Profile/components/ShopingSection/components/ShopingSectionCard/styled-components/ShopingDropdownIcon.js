import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const ShopingDropdownIcon = styled(KeyboardArrowDownIcon)`
  && {
    font-size: 25px;
    color: ${(props) => props.theme.text.dark};
    transform: ${(props) => (props.$dropped ? "rotateX(180deg)" : "none")};
    transition: 0.3s;
  }
`;
