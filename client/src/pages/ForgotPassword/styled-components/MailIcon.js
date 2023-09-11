import styled from "styled-components";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

export const MailIcon = styled(ForwardToInboxIcon)`
  && {
    font-size: 45px;
    margin-left: 10px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
