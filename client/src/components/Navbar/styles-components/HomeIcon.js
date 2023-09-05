import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const HomeIcon = styled(HomeOutlinedIcon)`
  && {
    font-size: 20px;
    margin-right: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
