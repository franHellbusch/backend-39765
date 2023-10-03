import styled from "styled-components";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

export const AdminIcon = styled(SupervisorAccountIcon)`
  && {
    font-size: 25px;
    margin-right: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
