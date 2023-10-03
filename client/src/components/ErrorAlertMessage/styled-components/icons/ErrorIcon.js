import styled from "styled-components";
import DangerousIcon from "@mui/icons-material/Dangerous";

export const ErrorIcon = styled(DangerousIcon)`
  && {
    font-size: 35px;
    color: ${(props) => props.theme.alert.danger};
  }
`;
