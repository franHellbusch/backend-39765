import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const ProfileUserIcon = styled(PersonOutlineOutlinedIcon)`
  && {
    font-size: 30px;
    margin-right: 3px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
