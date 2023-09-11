import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ArrowIcon = styled(ArrowBackIcon)`
  && {
    font-size: 25px;
    margin-right: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
