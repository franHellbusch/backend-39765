import styled from "styled-components";
import SecurityIcon from "@mui/icons-material/Security";

export const ShieldIcon = styled(SecurityIcon)`
  && {
    font-size: 45px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
