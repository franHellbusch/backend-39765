import styled from "styled-components";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

export const LogoutIcon = styled(ExitToAppOutlinedIcon)`
  && {
    font-size: 20px;
    margin-right: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
