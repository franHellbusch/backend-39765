import styled from "styled-components";
import WarningIcon from "@mui/icons-material/Warning";

export const WarningMessageIcon = styled(WarningIcon)`
  && {
    font-size: 35px;
    color: ${(props) => props.theme.alert.warning};
  }
`;
