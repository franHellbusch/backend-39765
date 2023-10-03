import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";

export const InfoMessageIcon = styled(InfoIcon)`
  && {
    font-size: 35px;
    color: ${(props) => props.theme.alert.info};
  }
`;
