import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const UserIcon = styled(PersonOutlineOutlinedIcon)`
  && {
    font-size: 20px;
    margin-right: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
