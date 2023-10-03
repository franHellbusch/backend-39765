import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const SuccessIcon = styled(CheckCircleIcon)`
  && {
    font-size: 35px;
    color: ${(props) => props.theme.alert.success};
  }
`;
