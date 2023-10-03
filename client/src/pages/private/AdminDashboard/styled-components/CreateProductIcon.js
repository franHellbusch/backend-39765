import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";

export const CreateProductIcon = styled(CreateIcon)`
  && {
    font-size: 29px;
    margin-right: 3px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
