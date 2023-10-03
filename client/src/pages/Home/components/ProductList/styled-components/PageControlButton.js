import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const PageControlButton = styled.button`
  padding: 5px;
  display: flex;
  border-radius: 5px;
  margin-right: ${(props) => props.$marginright || 0};
  background: ${(props) => props.theme.background.white};
  border: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.extraLight};
  }
`;

export const PageControlLeftIcon = styled(ArrowBackIosNewIcon)`
  && {
    font-size: 20px;
    color: ${(props) => (props.$disabled ? props.theme.colors.light : props.theme.colors.primary)};
  }
`;

export const PageControlNextIcon = styled(ArrowForwardIosIcon)`
  && {
    font-size: 20px;
    color: ${(props) => (props.$disabled ? props.theme.colors.light : props.theme.colors.primary)};
  }
`;
