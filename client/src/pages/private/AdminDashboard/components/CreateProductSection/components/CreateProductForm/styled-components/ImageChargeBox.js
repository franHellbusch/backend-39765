import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const ImageChargeBox = styled.span`
  position: relative;
  width: calc(100% - 10px);
  padding: 5px 0 5px 10px;
  font-size: 13px;
  color: ${(props) => props.theme.text.dark};
  background: ${(props) => props.theme.colors.light};
  border-radius: 5px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.grey};
    border-radius: 5px;
  }

  & > button {
    position: sticky;
    right: -1px;
    background: none;
    padding: 0 10px;
    border: 0;
    margin-left: 10px;
    margin-top: 3px;
    cursor: pointer;
    background: ${(props) => props.theme.colors.light};

    &:hover {
      color: ${(props) => props.theme.text.grey};
    }
  }
`;

export const ImageChargeBoxCloseIcon = styled(CloseIcon)`
  && {
    font-size: 15px;
    color: ${(props) => props.theme.text.dark};

    &:hover {
      color: ${(props) => props.theme.text.grey};
    }
  }
`;
