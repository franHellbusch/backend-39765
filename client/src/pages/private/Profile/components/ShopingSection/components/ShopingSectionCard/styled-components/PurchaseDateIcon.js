import styled from "styled-components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const PurchaseDateIcon = styled(CalendarMonthIcon)`
  && {
    font-size: 25px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
