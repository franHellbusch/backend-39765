import styled from "styled-components";
import FilterListIcon from "@mui/icons-material/FilterList";

export const ProductListIcon = styled(FilterListIcon)`
  && {
    font-size: 29px;
    margin-right: 3px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
