import styled from "styled-components";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export const PadlockIcon = styled(LockOpenIcon)`
  && {
    font-size: 45px;
    margin-left: 10px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
